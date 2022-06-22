// ts-ignore whole file
// @ts-nocheck

import * as ss58 from "@subsquid/ss58";
import {
  EventHandlerContext,
  Store,
  SubstrateProcessor,
} from "@subsquid/substrate-processor";
import { lookupArchive } from "@subsquid/archive-registry";
import { Account, HistoricalBalance, Era, NeuronRegisteredArgs, NeuronRegistered } from "./model";
// import { Era, NeuronRegisteredArgs } from "./types/events";



// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
 

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters.



// for strs in test_strs:
//     answer = solve.longestCommonPrefix(strs)
//     if len(answer) is 0:
//         print("answer is None!")
//     else:
//         print("answer:", answer)



const processor = new SubstrateProcessor("subtensor");

processor.setBatchSize(500);
processor.setDataSource({
  archive: 'http://localhost:4010/v1/graphql',
  chain: "ws://archivelb.nakamoto.opentensor.ai:9944",
  
});

processor.setTypesBundle('types.json');

const logger = (data: any) => {
  console.log(data);
}

processor.addEventHandler('subtensorModule.NeuronRegistered', async (ctx) => {
  const event = ctx.event;
  logger(event.extrinsic.args);

  const coldkey = ""
  const hotkey = ""

  for (const args of event.extrinsic.args) {
    if (args.name === "coldkey") {
      coldkey = args.value;
    }
    if (args.name === "hotkey") {
      hotkey = args.value;
    }
  }

    
  await ctx.store.save(
    new NeuronRegistered({
      id: event.id,
      name: event.name,
      method: event.method,
      section: event.section,
      versionInfo: event.extrinsic.versionInfo,
      indexInBlock: event.indexInBlock,
      blockNumber: event.blockNumber,
      blockHash: event.extrinsic.hash,
      immunityPeriod: event.extrinsic.era.immortalEra,
      coldkey: coldkey,
      hotkey: hotkey,
      // args: {
      //   id: event.id,
      //   name: event.extrinsic.args.name,
      //   type: event.extrinsic.args.type,
      //   value: event.extrinsic.args.value,
      // },
    })
  );


});

// processor.addEventHandler('subtensorModule', async (ctx) => {
//   await ctx.store.save(
//     new Neuron({
//       id: ctx.event.data.address,
//       version: ctx.event.data.version,
//       ip: ctx.event.data.ip,
//       port: ctx.event.data.port,
//       ipType: ctx.event.data.ipType,
//       uid: ctx.event.data.uid,
//       modality: ctx.event.data.modality,
//       hotkey: ctx.event.data.hotkey,
//       coldkey: ctx.event.data.coldkey,
//       active: ctx.event.data.active,
//       lastUpdate: ctx.event.data.lastUpdate,
//       priority: ctx.event.data.priority,
//       stake: ctx.event.data.stake,
//       rank: ctx.event.data.rank,
//       trust: ctx.event.data.trust,
//       consensus: ctx.event.data.consensus,
//       incentive: ctx.event.data.incentive,
//       dividends: ctx.event.data.dividends,
//     }),
//   )
// })

processor.run();


// processor.addEventHandler("balances.Transfer", async (ctx) => {
//   const transfer = getTransferEvent(ctx);
//   const tip = ctx.extrinsic?.tip || 0n;
//   const from = ss58.codec("kusama").encode(transfer.from);
//   const to = ss58.codec("kusama").encode(transfer.to);

//   const fromAcc = await getOrCreate(ctx.store, Account, from);
//   fromAcc.balance = fromAcc.balance || 0n;
//   fromAcc.balance -= transfer.amount;
//   fromAcc.balance -= tip;
//   await ctx.store.save(fromAcc);

//   const toAcc = await getOrCreate(ctx.store, Account, to);
//   toAcc.balance = toAcc.balance || 0n;
//   toAcc.balance += transfer.amount;
//   await ctx.store.save(toAcc);

//   await ctx.store.save(
//     new HistoricalBalance({
//       id: `${ctx.event.id}-to`,
//       account: fromAcc,
//       balance: fromAcc.balance,
//       date: new Date(ctx.block.timestamp),
//     })
//   );

//   await ctx.store.save(
//     new HistoricalBalance({
//       id: `${ctx.event.id}-from`,
//       account: toAcc,
//       balance: toAcc.balance,
//       date: new Date(ctx.block.timestamp),
//     })
//   );
// });

// interface TransferEvent {
//   from: Uint8Array;
//   to: Uint8Array;
//   amount: bigint;
// }

// function getTransferEvent(ctx: EventHandlerContext): TransferEvent {
//   const event = new BalancesTransferEvent(ctx);
//   if (event.isV1020) {
//     const [from, to, amount] = event.asV1020;
//     return { from, to, amount };
//   } else if (event.isV1050) {
//     const [from, to, amount] = event.asV1050;
//     return { from, to, amount };
//   } else {
//     const { from, to, amount } = event.asV9130;
//     return { from, to, amount };
//   }
// }

// async function getOrCreate<T extends { id: string }>(
//   store: Store,
//   EntityConstructor: EntityConstructor<T>,
//   id: string
// ): Promise<T> {
//   let entity = await store.get<T>(EntityConstructor, {
//     where: { id },
//   });

//   if (entity == null) {
//     entity = new EntityConstructor();
//     entity.id = id;
//   }

//   return entity;
// }

// type EntityConstructor<T> = {
//   new (...args: any[]): T;
// };

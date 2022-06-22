import * as ss58 from "@subsquid/ss58";
import {
  EventHandlerContext,
  Store,
  SubstrateProcessor,
} from "@subsquid/substrate-processor";
import { lookupArchive } from "@subsquid/archive-registry";
import { Account, HistoricalBalance, Neuron, NeuronRegistered } from "./model";
import { SubtensorModuleNeuronRegisteredEvent } from "./types/events";

const processor = new SubstrateProcessor("subtensor");

processor.setBatchSize(500);
processor.setDataSource({
  archive: 'http://localhost:4010/v1/graphql',
  chain: "ws://archivelb.nakamoto.opentensor.ai:9944",
  
});

processor.setTypesBundle('types.json');

const logger = (data: any) => {
  console.log(data.extrinsic.args);
}

processor.addEventHandler('subtensorModule.NeuronRegistered', async (ctx) => {
  const event = ctx.event;
  logger(event);

  await ctx.store.save(
    new NeuronRegistered({
      id: event.id,
      name: event.name,
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

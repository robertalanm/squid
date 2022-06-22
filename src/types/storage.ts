import assert from 'assert'
import {StorageContext, Result} from './support'
import * as v100 from './v100'

export class BalancesAccountStorage {
  constructor(private ctx: StorageContext) {}

  /**
   *  The balance of an account.
   * 
   *  NOTE: This is only used in the case that this pallet is used to store balances.
   */
  get isV100() {
    return this.ctx._chain.getStorageItemTypeHash('Balances', 'Account') === 'dba1bfeb1258117ae732d6352c5990b0a43384798842bb1ba85a19e1c4e289aa'
  }

  /**
   *  The balance of an account.
   * 
   *  NOTE: This is only used in the case that this pallet is used to store balances.
   */
  async getAsV100(key: Uint8Array): Promise<v100.AccountData> {
    assert(this.isV100)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Balances', 'Account', key)
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this.ctx._chain.getStorageItemTypeHash('Balances', 'Account') != null
  }
}

export class BalancesLocksStorage {
  constructor(private ctx: StorageContext) {}

  /**
   *  Any liquidity locks on some account balances.
   *  NOTE: Should only be accessed when setting, changing and freeing a lock.
   */
  get isV100() {
    return this.ctx._chain.getStorageItemTypeHash('Balances', 'Locks') === '1fd03ed79b885693f584f13fe463dfd4dff4135ad8a64aef22d7a9a4ed76b737'
  }

  /**
   *  Any liquidity locks on some account balances.
   *  NOTE: Should only be accessed when setting, changing and freeing a lock.
   */
  async getAsV100(key: Uint8Array): Promise<v100.BalanceLock[]> {
    assert(this.isV100)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Balances', 'Locks', key)
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this.ctx._chain.getStorageItemTypeHash('Balances', 'Locks') != null
  }
}

export class BalancesReservesStorage {
  constructor(private ctx: StorageContext) {}

  /**
   *  Named reserves on some account balances.
   */
  get isV100() {
    return this.ctx._chain.getStorageItemTypeHash('Balances', 'Reserves') === '08a78bdfa0c3e61a3737bcbc0f929bb14b5531a416f88db7d077526cfac0d083'
  }

  /**
   *  Named reserves on some account balances.
   */
  async getAsV100(key: Uint8Array): Promise<v100.ReserveData[]> {
    assert(this.isV100)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Balances', 'Reserves', key)
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this.ctx._chain.getStorageItemTypeHash('Balances', 'Reserves') != null
  }
}

export class BalancesStorageVersionStorage {
  constructor(private ctx: StorageContext) {}

  /**
   *  Storage version of the pallet.
   * 
   *  This is set to v2.0.0 for new networks.
   */
  get isV100() {
    return this.ctx._chain.getStorageItemTypeHash('Balances', 'StorageVersion') === '78a0d483d7fe4fc699def1765b9b22deed84e9f003169321f89a7b2c516a4ffe'
  }

  /**
   *  Storage version of the pallet.
   * 
   *  This is set to v2.0.0 for new networks.
   */
  async getAsV100(): Promise<v100.Releases> {
    assert(this.isV100)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Balances', 'StorageVersion')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this.ctx._chain.getStorageItemTypeHash('Balances', 'StorageVersion') != null
  }
}

export class BalancesTotalIssuanceStorage {
  constructor(private ctx: StorageContext) {}

  /**
   *  The total units issued in the system.
   */
  get isV100() {
    return this.ctx._chain.getStorageItemTypeHash('Balances', 'TotalIssuance') === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
  }

  /**
   *  The total units issued in the system.
   */
  async getAsV100(): Promise<bigint> {
    assert(this.isV100)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Balances', 'TotalIssuance')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this.ctx._chain.getStorageItemTypeHash('Balances', 'TotalIssuance') != null
  }
}

export class GrandpaCurrentSetIdStorage {
  constructor(private ctx: StorageContext) {}

  /**
   *  The number of changes (both in terms of keys and underlying economic responsibilities)
   *  in the "set" of Grandpa validators from genesis.
   */
  get isV100() {
    return this.ctx._chain.getStorageItemTypeHash('Grandpa', 'CurrentSetId') === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
  }

  /**
   *  The number of changes (both in terms of keys and underlying economic responsibilities)
   *  in the "set" of Grandpa validators from genesis.
   */
  async getAsV100(): Promise<bigint> {
    assert(this.isV100)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Grandpa', 'CurrentSetId')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this.ctx._chain.getStorageItemTypeHash('Grandpa', 'CurrentSetId') != null
  }
}

export class GrandpaNextForcedStorage {
  constructor(private ctx: StorageContext) {}

  /**
   *  next block number where we can force a change.
   */
  get isV100() {
    return this.ctx._chain.getStorageItemTypeHash('Grandpa', 'NextForced') === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
  }

  /**
   *  next block number where we can force a change.
   */
  async getAsV100(): Promise<number | undefined> {
    assert(this.isV100)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Grandpa', 'NextForced')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this.ctx._chain.getStorageItemTypeHash('Grandpa', 'NextForced') != null
  }
}

export class GrandpaPendingChangeStorage {
  constructor(private ctx: StorageContext) {}

  /**
   *  Pending change: (signaled at, scheduled change).
   */
  get isV100() {
    return this.ctx._chain.getStorageItemTypeHash('Grandpa', 'PendingChange') === '13755304b861af7343de28e9c0f8c93252785a6950a8ef864736ceb88092a3c7'
  }

  /**
   *  Pending change: (signaled at, scheduled change).
   */
  async getAsV100(): Promise<v100.StoredPendingChange | undefined> {
    assert(this.isV100)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Grandpa', 'PendingChange')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this.ctx._chain.getStorageItemTypeHash('Grandpa', 'PendingChange') != null
  }
}

export class GrandpaSetIdSessionStorage {
  constructor(private ctx: StorageContext) {}

  /**
   *  A mapping from grandpa set ID to the index of the *most recent* session for which its
   *  members were responsible.
   * 
   *  TWOX-NOTE: `SetId` is not under user control.
   */
  get isV100() {
    return this.ctx._chain.getStorageItemTypeHash('Grandpa', 'SetIdSession') === '2d385d75717e58066ac593e8c94f49e0ce544a47573cd5889073ca2ac7c97de9'
  }

  /**
   *  A mapping from grandpa set ID to the index of the *most recent* session for which its
   *  members were responsible.
   * 
   *  TWOX-NOTE: `SetId` is not under user control.
   */
  async getAsV100(key: bigint): Promise<number | undefined> {
    assert(this.isV100)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Grandpa', 'SetIdSession', key)
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this.ctx._chain.getStorageItemTypeHash('Grandpa', 'SetIdSession') != null
  }
}

export class GrandpaStalledStorage {
  constructor(private ctx: StorageContext) {}

  /**
   *  `true` if we are currently stalled.
   */
  get isV100() {
    return this.ctx._chain.getStorageItemTypeHash('Grandpa', 'Stalled') === '3b9e892deedcedebca6cccb95fac40be1ea485932811a2dcae3ec80a6b871360'
  }

  /**
   *  `true` if we are currently stalled.
   */
  async getAsV100(): Promise<[number, number] | undefined> {
    assert(this.isV100)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Grandpa', 'Stalled')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this.ctx._chain.getStorageItemTypeHash('Grandpa', 'Stalled') != null
  }
}

export class GrandpaStateStorage {
  constructor(private ctx: StorageContext) {}

  /**
   *  State of the current authority set.
   */
  get isV100() {
    return this.ctx._chain.getStorageItemTypeHash('Grandpa', 'State') === 'a793f4266a3a22cf894ef532591752b5cadd1e784285284a201d9d4da95a60fe'
  }

  /**
   *  State of the current authority set.
   */
  async getAsV100(): Promise<v100.StoredState> {
    assert(this.isV100)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Grandpa', 'State')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this.ctx._chain.getStorageItemTypeHash('Grandpa', 'State') != null
  }
}

export class RandomnessCollectiveFlipRandomMaterialStorage {
  constructor(private ctx: StorageContext) {}

  /**
   *  Series of block headers from the last 81 blocks that acts as random seed material. This
   *  is arranged as a ring buffer with `block_number % 81` being the index into the `Vec` of
   *  the oldest hash.
   */
  get isV100() {
    return this.ctx._chain.getStorageItemTypeHash('RandomnessCollectiveFlip', 'RandomMaterial') === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
  }

  /**
   *  Series of block headers from the last 81 blocks that acts as random seed material. This
   *  is arranged as a ring buffer with `block_number % 81` being the index into the `Vec` of
   *  the oldest hash.
   */
  async getAsV100(): Promise<Uint8Array[]> {
    assert(this.isV100)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'RandomnessCollectiveFlip', 'RandomMaterial')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this.ctx._chain.getStorageItemTypeHash('RandomnessCollectiveFlip', 'RandomMaterial') != null
  }
}

export class SubtensorModuleActivityCutoffStorage {
  constructor(private ctx: StorageContext) {}

  get isV100() {
    return this.ctx._chain.getStorageItemTypeHash('SubtensorModule', 'ActivityCutoff') === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
  }

  async getAsV100(): Promise<bigint> {
    assert(this.isV100)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'SubtensorModule', 'ActivityCutoff')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this.ctx._chain.getStorageItemTypeHash('SubtensorModule', 'ActivityCutoff') != null
  }
}

export class SubtensorModuleAdjustmentIntervalStorage {
  constructor(private ctx: StorageContext) {}

  get isV100() {
    return this.ctx._chain.getStorageItemTypeHash('SubtensorModule', 'AdjustmentInterval') === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
  }

  async getAsV100(): Promise<bigint> {
    assert(this.isV100)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'SubtensorModule', 'AdjustmentInterval')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this.ctx._chain.getStorageItemTypeHash('SubtensorModule', 'AdjustmentInterval') != null
  }
}

export class SubtensorModuleDifficultyStorage {
  constructor(private ctx: StorageContext) {}

  get isV100() {
    return this.ctx._chain.getStorageItemTypeHash('SubtensorModule', 'Difficulty') === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
  }

  async getAsV100(): Promise<bigint> {
    assert(this.isV100)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'SubtensorModule', 'Difficulty')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this.ctx._chain.getStorageItemTypeHash('SubtensorModule', 'Difficulty') != null
  }
}

export class SubtensorModuleHotkeysStorage {
  constructor(private ctx: StorageContext) {}

  /**
   *  ---- Maps from hotkey to uid.
   */
  get isV100() {
    return this.ctx._chain.getStorageItemTypeHash('SubtensorModule', 'Hotkeys') === '25f0d63900988134e6767c7fe398885c0448fd3bd7a0d8ff90cf6b33a482cebd'
  }

  /**
   *  ---- Maps from hotkey to uid.
   */
  async getAsV100(key: Uint8Array): Promise<number> {
    assert(this.isV100)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'SubtensorModule', 'Hotkeys', key)
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this.ctx._chain.getStorageItemTypeHash('SubtensorModule', 'Hotkeys') != null
  }
}

export class SubtensorModuleLastDifficultyAdjustmentBlockStorage {
  constructor(private ctx: StorageContext) {}

  get isV100() {
    return this.ctx._chain.getStorageItemTypeHash('SubtensorModule', 'LastDifficultyAdjustmentBlock') === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
  }

  async getAsV100(): Promise<bigint> {
    assert(this.isV100)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'SubtensorModule', 'LastDifficultyAdjustmentBlock')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this.ctx._chain.getStorageItemTypeHash('SubtensorModule', 'LastDifficultyAdjustmentBlock') != null
  }
}

export class SubtensorModuleMaxRegistrationsPerBlockStorage {
  constructor(private ctx: StorageContext) {}

  get isV100() {
    return this.ctx._chain.getStorageItemTypeHash('SubtensorModule', 'MaxRegistrationsPerBlock') === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
  }

  async getAsV100(): Promise<bigint> {
    assert(this.isV100)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'SubtensorModule', 'MaxRegistrationsPerBlock')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this.ctx._chain.getStorageItemTypeHash('SubtensorModule', 'MaxRegistrationsPerBlock') != null
  }
}

export class SubtensorModuleNStorage {
  constructor(private ctx: StorageContext) {}

  /**
   *  ************************************************************
   * 	*---- Storage Objects
   *  ************************************************************
   */
  get isV100() {
    return this.ctx._chain.getStorageItemTypeHash('SubtensorModule', 'N') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  ************************************************************
   * 	*---- Storage Objects
   *  ************************************************************
   */
  async getAsV100(): Promise<number> {
    assert(this.isV100)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'SubtensorModule', 'N')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this.ctx._chain.getStorageItemTypeHash('SubtensorModule', 'N') != null
  }
}

export class SubtensorModuleNeuronsStorage {
  constructor(private ctx: StorageContext) {}

  /**
   *  ---- Maps from uid to neuron.
   */
  get isV100() {
    return this.ctx._chain.getStorageItemTypeHash('SubtensorModule', 'Neurons') === '893f13529c7086c600265efd340b02f4932efb16e4e5333ac6438bb1211f40fc'
  }

  /**
   *  ---- Maps from uid to neuron.
   */
  async getAsV100(key: number): Promise<v100.NeuronMetadataOf> {
    assert(this.isV100)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'SubtensorModule', 'Neurons', key)
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this.ctx._chain.getStorageItemTypeHash('SubtensorModule', 'Neurons') != null
  }
}

export class SubtensorModuleRegistrationsThisBlockStorage {
  constructor(private ctx: StorageContext) {}

  get isV100() {
    return this.ctx._chain.getStorageItemTypeHash('SubtensorModule', 'RegistrationsThisBlock') === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
  }

  async getAsV100(): Promise<bigint> {
    assert(this.isV100)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'SubtensorModule', 'RegistrationsThisBlock')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this.ctx._chain.getStorageItemTypeHash('SubtensorModule', 'RegistrationsThisBlock') != null
  }
}

export class SubtensorModuleRegistrationsThisIntervalStorage {
  constructor(private ctx: StorageContext) {}

  get isV100() {
    return this.ctx._chain.getStorageItemTypeHash('SubtensorModule', 'RegistrationsThisInterval') === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
  }

  async getAsV100(): Promise<bigint> {
    assert(this.isV100)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'SubtensorModule', 'RegistrationsThisInterval')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this.ctx._chain.getStorageItemTypeHash('SubtensorModule', 'RegistrationsThisInterval') != null
  }
}

export class SubtensorModuleTargetRegistrationsPerIntervalStorage {
  constructor(private ctx: StorageContext) {}

  get isV100() {
    return this.ctx._chain.getStorageItemTypeHash('SubtensorModule', 'TargetRegistrationsPerInterval') === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
  }

  async getAsV100(): Promise<bigint> {
    assert(this.isV100)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'SubtensorModule', 'TargetRegistrationsPerInterval')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this.ctx._chain.getStorageItemTypeHash('SubtensorModule', 'TargetRegistrationsPerInterval') != null
  }
}

export class SubtensorModuleTotalBondsPurchasedStorage {
  constructor(private ctx: StorageContext) {}

  get isV100() {
    return this.ctx._chain.getStorageItemTypeHash('SubtensorModule', 'TotalBondsPurchased') === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
  }

  async getAsV100(): Promise<bigint> {
    assert(this.isV100)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'SubtensorModule', 'TotalBondsPurchased')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this.ctx._chain.getStorageItemTypeHash('SubtensorModule', 'TotalBondsPurchased') != null
  }
}

export class SubtensorModuleTotalEmissionStorage {
  constructor(private ctx: StorageContext) {}

  get isV100() {
    return this.ctx._chain.getStorageItemTypeHash('SubtensorModule', 'TotalEmission') === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
  }

  async getAsV100(): Promise<bigint> {
    assert(this.isV100)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'SubtensorModule', 'TotalEmission')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this.ctx._chain.getStorageItemTypeHash('SubtensorModule', 'TotalEmission') != null
  }
}

export class SubtensorModuleTotalIssuanceStorage {
  constructor(private ctx: StorageContext) {}

  get isV100() {
    return this.ctx._chain.getStorageItemTypeHash('SubtensorModule', 'TotalIssuance') === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
  }

  async getAsV100(): Promise<bigint> {
    assert(this.isV100)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'SubtensorModule', 'TotalIssuance')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this.ctx._chain.getStorageItemTypeHash('SubtensorModule', 'TotalIssuance') != null
  }
}

export class SubtensorModuleTotalStakeStorage {
  constructor(private ctx: StorageContext) {}

  get isV100() {
    return this.ctx._chain.getStorageItemTypeHash('SubtensorModule', 'TotalStake') === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
  }

  async getAsV100(): Promise<bigint> {
    assert(this.isV100)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'SubtensorModule', 'TotalStake')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this.ctx._chain.getStorageItemTypeHash('SubtensorModule', 'TotalStake') != null
  }
}

export class SudoKeyStorage {
  constructor(private ctx: StorageContext) {}

  /**
   *  The `AccountId` of the sudo key.
   */
  get isV100() {
    return this.ctx._chain.getStorageItemTypeHash('Sudo', 'Key') === '146c0d1dce070e2a43f497c479248a882f4ed48937203ea336e85dcf2fa0ec6c'
  }

  /**
   *  The `AccountId` of the sudo key.
   */
  async getAsV100(): Promise<Uint8Array> {
    assert(this.isV100)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Sudo', 'Key')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this.ctx._chain.getStorageItemTypeHash('Sudo', 'Key') != null
  }
}

export class SystemAccountStorage {
  constructor(private ctx: StorageContext) {}

  /**
   *  The full account information for a particular account ID.
   */
  get isV100() {
    return this.ctx._chain.getStorageItemTypeHash('System', 'Account') === '6890c1aff9ee8613f29f28c61a4338c5967aa55e87574dc736c9de25fae1f270'
  }

  /**
   *  The full account information for a particular account ID.
   */
  async getAsV100(key: Uint8Array): Promise<v100.AccountInfoWithTripleRefCount> {
    assert(this.isV100)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'System', 'Account', key)
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this.ctx._chain.getStorageItemTypeHash('System', 'Account') != null
  }
}

export class SystemAllExtrinsicsLenStorage {
  constructor(private ctx: StorageContext) {}

  /**
   *  Total length (in bytes) for all extrinsics put together, for the current block.
   */
  get isV100() {
    return this.ctx._chain.getStorageItemTypeHash('System', 'AllExtrinsicsLen') === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
  }

  /**
   *  Total length (in bytes) for all extrinsics put together, for the current block.
   */
  async getAsV100(): Promise<number | undefined> {
    assert(this.isV100)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'System', 'AllExtrinsicsLen')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this.ctx._chain.getStorageItemTypeHash('System', 'AllExtrinsicsLen') != null
  }
}

export class SystemBlockHashStorage {
  constructor(private ctx: StorageContext) {}

  /**
   *  Map of block numbers to block hashes.
   */
  get isV100() {
    return this.ctx._chain.getStorageItemTypeHash('System', 'BlockHash') === '06f5703796027f4b198d4ffd50b721273430d8ff663660646793873168f9df17'
  }

  /**
   *  Map of block numbers to block hashes.
   */
  async getAsV100(key: number): Promise<Uint8Array> {
    assert(this.isV100)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'System', 'BlockHash', key)
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this.ctx._chain.getStorageItemTypeHash('System', 'BlockHash') != null
  }
}

export class SystemBlockWeightStorage {
  constructor(private ctx: StorageContext) {}

  /**
   *  The current weight for the block.
   */
  get isV100() {
    return this.ctx._chain.getStorageItemTypeHash('System', 'BlockWeight') === '3117e920c869758010946f61bdfb045561b02a263bdc3bcff42e4ce915e4e5d4'
  }

  /**
   *  The current weight for the block.
   */
  async getAsV100(): Promise<v100.PerDispatchClassWeight> {
    assert(this.isV100)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'System', 'BlockWeight')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this.ctx._chain.getStorageItemTypeHash('System', 'BlockWeight') != null
  }
}

export class SystemDigestStorage {
  constructor(private ctx: StorageContext) {}

  /**
   *  Digest of the current block, also part of the block header.
   */
  get isV100() {
    return this.ctx._chain.getStorageItemTypeHash('System', 'Digest') === '1ddf323439264601ddc32cb21cada8436fbec4e5389a9ff6d45f95e6e3c4b579'
  }

  /**
   *  Digest of the current block, also part of the block header.
   */
  async getAsV100(): Promise<v100.Digest> {
    assert(this.isV100)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'System', 'Digest')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this.ctx._chain.getStorageItemTypeHash('System', 'Digest') != null
  }
}

export class SystemEventCountStorage {
  constructor(private ctx: StorageContext) {}

  /**
   *  The number of events in the `Events<T>` list.
   */
  get isV100() {
    return this.ctx._chain.getStorageItemTypeHash('System', 'EventCount') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  The number of events in the `Events<T>` list.
   */
  async getAsV100(): Promise<number> {
    assert(this.isV100)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'System', 'EventCount')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this.ctx._chain.getStorageItemTypeHash('System', 'EventCount') != null
  }
}

export class SystemEventTopicsStorage {
  constructor(private ctx: StorageContext) {}

  /**
   *  Mapping between a topic (represented by T::Hash) and a vector of indexes
   *  of events in the `<Events<T>>` list.
   * 
   *  All topic vectors have deterministic storage locations depending on the topic. This
   *  allows light-clients to leverage the changes trie storage tracking mechanism and
   *  in case of changes fetch the list of events of interest.
   * 
   *  The value has the type `(T::BlockNumber, EventIndex)` because if we used only just
   *  the `EventIndex` then in case if the topic has the same contents on the next block
   *  no notification will be triggered thus the event might be lost.
   */
  get isV100() {
    return this.ctx._chain.getStorageItemTypeHash('System', 'EventTopics') === 'd5ef37ba3daec264a9dcba5a29bf5b2ff23eb80b912936f924f44a8db557c58d'
  }

  /**
   *  Mapping between a topic (represented by T::Hash) and a vector of indexes
   *  of events in the `<Events<T>>` list.
   * 
   *  All topic vectors have deterministic storage locations depending on the topic. This
   *  allows light-clients to leverage the changes trie storage tracking mechanism and
   *  in case of changes fetch the list of events of interest.
   * 
   *  The value has the type `(T::BlockNumber, EventIndex)` because if we used only just
   *  the `EventIndex` then in case if the topic has the same contents on the next block
   *  no notification will be triggered thus the event might be lost.
   */
  async getAsV100(key: Uint8Array): Promise<[number, number][]> {
    assert(this.isV100)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'System', 'EventTopics', key)
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this.ctx._chain.getStorageItemTypeHash('System', 'EventTopics') != null
  }
}

export class SystemEventsStorage {
  constructor(private ctx: StorageContext) {}

  /**
   *  Events deposited for the current block.
   */
  get isV100() {
    return this.ctx._chain.getStorageItemTypeHash('System', 'Events') === '89c733da76db44600415953847cad5bdfd4c54598b6bddadf8bef74b005b3389'
  }

  /**
   *  Events deposited for the current block.
   */
  async getAsV100(): Promise<v100.EventRecord[]> {
    assert(this.isV100)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'System', 'Events')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this.ctx._chain.getStorageItemTypeHash('System', 'Events') != null
  }
}

export class SystemExecutionPhaseStorage {
  constructor(private ctx: StorageContext) {}

  /**
   *  The execution phase of the block.
   */
  get isV100() {
    return this.ctx._chain.getStorageItemTypeHash('System', 'ExecutionPhase') === 'd79e80744c6939b13f7b8c45d8ea2656fb288e2987e1e58a3c0c8e3c80bc2040'
  }

  /**
   *  The execution phase of the block.
   */
  async getAsV100(): Promise<v100.Phase | undefined> {
    assert(this.isV100)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'System', 'ExecutionPhase')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this.ctx._chain.getStorageItemTypeHash('System', 'ExecutionPhase') != null
  }
}

export class SystemExtrinsicCountStorage {
  constructor(private ctx: StorageContext) {}

  /**
   *  Total extrinsics count for the current block.
   */
  get isV100() {
    return this.ctx._chain.getStorageItemTypeHash('System', 'ExtrinsicCount') === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
  }

  /**
   *  Total extrinsics count for the current block.
   */
  async getAsV100(): Promise<number | undefined> {
    assert(this.isV100)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'System', 'ExtrinsicCount')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this.ctx._chain.getStorageItemTypeHash('System', 'ExtrinsicCount') != null
  }
}

export class SystemExtrinsicDataStorage {
  constructor(private ctx: StorageContext) {}

  /**
   *  Extrinsics data for the current block (maps an extrinsic's index to its data).
   */
  get isV100() {
    return this.ctx._chain.getStorageItemTypeHash('System', 'ExtrinsicData') === 'f278d7d239e9ac4cbb0509cc885124fd45c3f5b75452aba0391701e1a886debb'
  }

  /**
   *  Extrinsics data for the current block (maps an extrinsic's index to its data).
   */
  async getAsV100(key: number): Promise<Uint8Array> {
    assert(this.isV100)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'System', 'ExtrinsicData', key)
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this.ctx._chain.getStorageItemTypeHash('System', 'ExtrinsicData') != null
  }
}

export class SystemLastRuntimeUpgradeStorage {
  constructor(private ctx: StorageContext) {}

  /**
   *  Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
   */
  get isV100() {
    return this.ctx._chain.getStorageItemTypeHash('System', 'LastRuntimeUpgrade') === 'e03e445e7a7694163bede3a772a8a347abf7a3a00424fbafec75f819d6173a17'
  }

  /**
   *  Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
   */
  async getAsV100(): Promise<v100.LastRuntimeUpgradeInfo | undefined> {
    assert(this.isV100)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'System', 'LastRuntimeUpgrade')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this.ctx._chain.getStorageItemTypeHash('System', 'LastRuntimeUpgrade') != null
  }
}

export class SystemNumberStorage {
  constructor(private ctx: StorageContext) {}

  /**
   *  The current block number being processed. Set by `execute_block`.
   */
  get isV100() {
    return this.ctx._chain.getStorageItemTypeHash('System', 'Number') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  The current block number being processed. Set by `execute_block`.
   */
  async getAsV100(): Promise<number> {
    assert(this.isV100)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'System', 'Number')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this.ctx._chain.getStorageItemTypeHash('System', 'Number') != null
  }
}

export class SystemParentHashStorage {
  constructor(private ctx: StorageContext) {}

  /**
   *  Hash of the previous block.
   */
  get isV100() {
    return this.ctx._chain.getStorageItemTypeHash('System', 'ParentHash') === '146c0d1dce070e2a43f497c479248a882f4ed48937203ea336e85dcf2fa0ec6c'
  }

  /**
   *  Hash of the previous block.
   */
  async getAsV100(): Promise<Uint8Array> {
    assert(this.isV100)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'System', 'ParentHash')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this.ctx._chain.getStorageItemTypeHash('System', 'ParentHash') != null
  }
}

export class SystemUpgradedToTripleRefCountStorage {
  constructor(private ctx: StorageContext) {}

  /**
   *  True if we have upgraded so that AccountInfo contains three types of `RefCount`. False
   *  (default) if not.
   */
  get isV100() {
    return this.ctx._chain.getStorageItemTypeHash('System', 'UpgradedToTripleRefCount') === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
  }

  /**
   *  True if we have upgraded so that AccountInfo contains three types of `RefCount`. False
   *  (default) if not.
   */
  async getAsV100(): Promise<boolean> {
    assert(this.isV100)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'System', 'UpgradedToTripleRefCount')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this.ctx._chain.getStorageItemTypeHash('System', 'UpgradedToTripleRefCount') != null
  }
}

export class SystemUpgradedToU32RefCountStorage {
  constructor(private ctx: StorageContext) {}

  /**
   *  True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
   */
  get isV100() {
    return this.ctx._chain.getStorageItemTypeHash('System', 'UpgradedToU32RefCount') === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
  }

  /**
   *  True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
   */
  async getAsV100(): Promise<boolean> {
    assert(this.isV100)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'System', 'UpgradedToU32RefCount')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this.ctx._chain.getStorageItemTypeHash('System', 'UpgradedToU32RefCount') != null
  }
}

export class TimestampDidUpdateStorage {
  constructor(private ctx: StorageContext) {}

  /**
   *  Did the timestamp get updated in this block?
   */
  get isV100() {
    return this.ctx._chain.getStorageItemTypeHash('Timestamp', 'DidUpdate') === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
  }

  /**
   *  Did the timestamp get updated in this block?
   */
  async getAsV100(): Promise<boolean> {
    assert(this.isV100)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Timestamp', 'DidUpdate')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this.ctx._chain.getStorageItemTypeHash('Timestamp', 'DidUpdate') != null
  }
}

export class TimestampNowStorage {
  constructor(private ctx: StorageContext) {}

  /**
   *  Current time for the current block.
   */
  get isV100() {
    return this.ctx._chain.getStorageItemTypeHash('Timestamp', 'Now') === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
  }

  /**
   *  Current time for the current block.
   */
  async getAsV100(): Promise<bigint> {
    assert(this.isV100)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Timestamp', 'Now')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this.ctx._chain.getStorageItemTypeHash('Timestamp', 'Now') != null
  }
}

export class TransactionPaymentNextFeeMultiplierStorage {
  constructor(private ctx: StorageContext) {}

  get isV100() {
    return this.ctx._chain.getStorageItemTypeHash('TransactionPayment', 'NextFeeMultiplier') === '8840628264db1877ef5c3718a00459d4b519de0922f813836237f71320a25aa6'
  }

  async getAsV100(): Promise<bigint> {
    assert(this.isV100)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'TransactionPayment', 'NextFeeMultiplier')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this.ctx._chain.getStorageItemTypeHash('TransactionPayment', 'NextFeeMultiplier') != null
  }
}

export class TransactionPaymentStorageVersionStorage {
  constructor(private ctx: StorageContext) {}

  get isV100() {
    return this.ctx._chain.getStorageItemTypeHash('TransactionPayment', 'StorageVersion') === '78a0d483d7fe4fc699def1765b9b22deed84e9f003169321f89a7b2c516a4ffe'
  }

  async getAsV100(): Promise<v100.Releases> {
    assert(this.isV100)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'TransactionPayment', 'StorageVersion')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this.ctx._chain.getStorageItemTypeHash('TransactionPayment', 'StorageVersion') != null
  }
}

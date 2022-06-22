import type {Result} from './support'

export interface AccountData {
  free: bigint
  reserved: bigint
  miscFrozen: bigint
  feeFrozen: bigint
}

export interface BalanceLock {
  id: Uint8Array
  amount: bigint
  reasons: Reasons
}

export interface ReserveData {
  id: Uint8Array
  amount: bigint
}

export type Releases = Releases_V1 | Releases_V2 | Releases_V3 | Releases_V4 | Releases_V5 | Releases_V6 | Releases_V7 | Releases_V8 | Releases_V9 | Releases_V10

export interface Releases_V1 {
  __kind: 'V1'
}

export interface Releases_V2 {
  __kind: 'V2'
}

export interface Releases_V3 {
  __kind: 'V3'
}

export interface Releases_V4 {
  __kind: 'V4'
}

export interface Releases_V5 {
  __kind: 'V5'
}

export interface Releases_V6 {
  __kind: 'V6'
}

export interface Releases_V7 {
  __kind: 'V7'
}

export interface Releases_V8 {
  __kind: 'V8'
}

export interface Releases_V9 {
  __kind: 'V9'
}

export interface Releases_V10 {
  __kind: 'V10'
}

export interface StoredPendingChange {
  scheduledAt: number
  delay: number
  nextAuthorities: [Uint8Array, bigint][]
}

export type StoredState = StoredState_Live | StoredState_PendingPause | StoredState_Paused | StoredState_PendingResume

export interface StoredState_Live {
  __kind: 'Live'
  value: null
}

export interface StoredState_PendingPause {
  __kind: 'PendingPause'
  value: PendingPause
}

export interface StoredState_Paused {
  __kind: 'Paused'
  value: null
}

export interface StoredState_PendingResume {
  __kind: 'PendingResume'
  value: PendingResume
}

export interface NeuronMetadataOf {
  version: number
  ip: bigint
  port: number
  ipType: number
  uid: number
  modality: number
  hotkey: Uint8Array
  coldkey: Uint8Array
  active: number
  lastUpdate: bigint
  priority: bigint
  stake: bigint
  rank: bigint
  trust: bigint
  consensus: bigint
  incentive: bigint
  dividends: bigint
  emission: bigint
  bonds: [number, bigint][]
  weights: [number, number][]
}

export interface AccountInfoWithTripleRefCount {
  nonce: number
  consumers: number
  providers: number
  sufficients: number
  data: AccountData
}

export interface PerDispatchClassWeight {
  normal: bigint
  operational: bigint
  mandatory: bigint
}

export interface Digest {
  logs: DigestItem[]
}

export interface EventRecord {
  phase: Phase
  event: Type_86
  topics: Uint8Array[]
}

export type Phase = Phase_ApplyExtrinsic | Phase_Finalization | Phase_Initialization

export interface Phase_ApplyExtrinsic {
  __kind: 'ApplyExtrinsic'
  value: number
}

export interface Phase_Finalization {
  __kind: 'Finalization'
  value: null
}

export interface Phase_Initialization {
  __kind: 'Initialization'
  value: null
}

export interface LastRuntimeUpgradeInfo {
  specVersion: number
  specName: string
}

export type Reasons = Reasons_Fee | Reasons_Misc | Reasons_All

export interface Reasons_Fee {
  __kind: 'Fee'
}

export interface Reasons_Misc {
  __kind: 'Misc'
}

export interface Reasons_All {
  __kind: 'All'
}

export interface PendingPause {
  scheduledAt: number
  delay: number
}

export interface PendingResume {
  scheduledAt: number
  delay: number
}

export type DigestItem = DigestItem_Other | DigestItem_AuthoritiesChange | DigestItem_ChangesTrieRoot | DigestItem_SealV0 | DigestItem_Consensus | DigestItem_Seal | DigestItem_PreRuntime | DigestItem_ChangesTrieSignal | DigestItem_RuntimeEnvironmentUpdated

export interface DigestItem_Other {
  __kind: 'Other'
  value: Uint8Array
}

export interface DigestItem_AuthoritiesChange {
  __kind: 'AuthoritiesChange'
  value: Uint8Array[]
}

export interface DigestItem_ChangesTrieRoot {
  __kind: 'ChangesTrieRoot'
  value: Uint8Array
}

export interface DigestItem_SealV0 {
  __kind: 'SealV0'
  value: [bigint, Uint8Array]
}

export interface DigestItem_Consensus {
  __kind: 'Consensus'
  value: [Uint8Array, Uint8Array]
}

export interface DigestItem_Seal {
  __kind: 'Seal'
  value: [Uint8Array, Uint8Array]
}

export interface DigestItem_PreRuntime {
  __kind: 'PreRuntime'
  value: [Uint8Array, Uint8Array]
}

export interface DigestItem_ChangesTrieSignal {
  __kind: 'ChangesTrieSignal'
  value: ChangesTrieSignal
}

export interface DigestItem_RuntimeEnvironmentUpdated {
  __kind: 'RuntimeEnvironmentUpdated'
  value: null
}

export type Type_86 = Type_86_System | Type_86_Grandpa | Type_86_Balances | Type_86_Sudo | Type_86_SubtensorModule

export interface Type_86_System {
  __kind: 'System'
  value: SystemEvent
}

export interface Type_86_Grandpa {
  __kind: 'Grandpa'
  value: GrandpaEvent
}

export interface Type_86_Balances {
  __kind: 'Balances'
  value: BalancesEvent
}

export interface Type_86_Sudo {
  __kind: 'Sudo'
  value: SudoEvent
}

export interface Type_86_SubtensorModule {
  __kind: 'SubtensorModule'
  value: SubtensorModuleEvent
}

export type ChangesTrieSignal = ChangesTrieSignal_NewConfiguration

export interface ChangesTrieSignal_NewConfiguration {
  __kind: 'NewConfiguration'
  value: (ChangesTrieConfiguration | undefined)
}

export type SystemEvent = SystemEvent_ExtrinsicSuccess | SystemEvent_ExtrinsicFailed | SystemEvent_CodeUpdated | SystemEvent_NewAccount | SystemEvent_KilledAccount | SystemEvent_Remarked

/**
 *  An extrinsic completed successfully. \[info\]
 */
export interface SystemEvent_ExtrinsicSuccess {
  __kind: 'ExtrinsicSuccess'
  value: DispatchInfo
}

/**
 *  An extrinsic failed. \[error, info\]
 */
export interface SystemEvent_ExtrinsicFailed {
  __kind: 'ExtrinsicFailed'
  value: [DispatchError, DispatchInfo]
}

/**
 *  `:code` was updated.
 */
export interface SystemEvent_CodeUpdated {
  __kind: 'CodeUpdated'
}

/**
 *  A new \[account\] was created.
 */
export interface SystemEvent_NewAccount {
  __kind: 'NewAccount'
  value: Uint8Array
}

/**
 *  An \[account\] was reaped.
 */
export interface SystemEvent_KilledAccount {
  __kind: 'KilledAccount'
  value: Uint8Array
}

/**
 *  On on-chain remark happened. \[origin, remark_hash\]
 */
export interface SystemEvent_Remarked {
  __kind: 'Remarked'
  value: [Uint8Array, Uint8Array]
}

export type GrandpaEvent = GrandpaEvent_NewAuthorities | GrandpaEvent_Paused | GrandpaEvent_Resumed

/**
 *  New authority set has been applied. \[authority_set\]
 */
export interface GrandpaEvent_NewAuthorities {
  __kind: 'NewAuthorities'
  value: [Uint8Array, bigint][]
}

/**
 *  Current authority set has been paused.
 */
export interface GrandpaEvent_Paused {
  __kind: 'Paused'
}

/**
 *  Current authority set has been resumed.
 */
export interface GrandpaEvent_Resumed {
  __kind: 'Resumed'
}

export type BalancesEvent = BalancesEvent_Endowed | BalancesEvent_DustLost | BalancesEvent_Transfer | BalancesEvent_BalanceSet | BalancesEvent_Deposit | BalancesEvent_Reserved | BalancesEvent_Unreserved | BalancesEvent_ReserveRepatriated

/**
 *  An account was created with some free balance. \[account, free_balance\]
 */
export interface BalancesEvent_Endowed {
  __kind: 'Endowed'
  value: [Uint8Array, bigint]
}

/**
 *  An account was removed whose balance was non-zero but below ExistentialDeposit,
 *  resulting in an outright loss. \[account, balance\]
 */
export interface BalancesEvent_DustLost {
  __kind: 'DustLost'
  value: [Uint8Array, bigint]
}

/**
 *  Transfer succeeded. \[from, to, value\]
 */
export interface BalancesEvent_Transfer {
  __kind: 'Transfer'
  value: [Uint8Array, Uint8Array, bigint]
}

/**
 *  A balance was set by root. \[who, free, reserved\]
 */
export interface BalancesEvent_BalanceSet {
  __kind: 'BalanceSet'
  value: [Uint8Array, bigint, bigint]
}

/**
 *  Some amount was deposited (e.g. for transaction fees). \[who, deposit\]
 */
export interface BalancesEvent_Deposit {
  __kind: 'Deposit'
  value: [Uint8Array, bigint]
}

/**
 *  Some balance was reserved (moved from free to reserved). \[who, value\]
 */
export interface BalancesEvent_Reserved {
  __kind: 'Reserved'
  value: [Uint8Array, bigint]
}

/**
 *  Some balance was unreserved (moved from reserved to free). \[who, value\]
 */
export interface BalancesEvent_Unreserved {
  __kind: 'Unreserved'
  value: [Uint8Array, bigint]
}

/**
 *  Some balance was moved from the reserve of the first account to the second account.
 *  Final argument indicates the destination balance type.
 *  \[from, to, balance, destination_status\]
 */
export interface BalancesEvent_ReserveRepatriated {
  __kind: 'ReserveRepatriated'
  value: [Uint8Array, Uint8Array, bigint, BalanceStatus]
}

export type SudoEvent = SudoEvent_Sudid | SudoEvent_KeyChanged | SudoEvent_SudoAsDone

/**
 *  A sudo just took place. \[result\]
 */
export interface SudoEvent_Sudid {
  __kind: 'Sudid'
  value: Result<null, DispatchError>
}

/**
 *  The \[sudoer\] just switched identity; the old key is supplied.
 */
export interface SudoEvent_KeyChanged {
  __kind: 'KeyChanged'
  value: Uint8Array
}

/**
 *  A sudo just took place. \[result\]
 */
export interface SudoEvent_SudoAsDone {
  __kind: 'SudoAsDone'
  value: Result<null, DispatchError>
}

export type SubtensorModuleEvent = SubtensorModuleEvent_WeightsSet | SubtensorModuleEvent_NeuronRegistered | SubtensorModuleEvent_AxonServed | SubtensorModuleEvent_StakeAdded | SubtensorModuleEvent_StakeRemoved

/**
 *  ---- Event created when a caller successfully set's their weights
 *  on the chain.
 */
export interface SubtensorModuleEvent_WeightsSet {
  __kind: 'WeightsSet'
  value: Uint8Array
}

/**
 *  --- Event created when a new neuron account has been registered to 
 *  the chain.
 */
export interface SubtensorModuleEvent_NeuronRegistered {
  __kind: 'NeuronRegistered'
  value: number
}

/**
 *  --- Event created when the axon server information is added to the network.
 */
export interface SubtensorModuleEvent_AxonServed {
  __kind: 'AxonServed'
  value: number
}

/**
 *  --- Event created during when stake has been transfered from 
 *  the coldkey onto the hotkey staking account.
 */
export interface SubtensorModuleEvent_StakeAdded {
  __kind: 'StakeAdded'
  value: [Uint8Array, bigint]
}

/**
 *  --- Event created when stake has been removed from 
 *  the staking account into the coldkey account.
 */
export interface SubtensorModuleEvent_StakeRemoved {
  __kind: 'StakeRemoved'
  value: [Uint8Array, bigint]
}

export interface ChangesTrieConfiguration {
  digestInterval: number
  digestLevels: number
}

export interface DispatchInfo {
  weight: bigint
  class: DispatchClass
  paysFee: Pays
}

export type DispatchError = DispatchError_Other | DispatchError_CannotLookup | DispatchError_BadOrigin | DispatchError_Module | DispatchError_ConsumerRemaining | DispatchError_NoProviders | DispatchError_Token | DispatchError_Arithmetic

export interface DispatchError_Other {
  __kind: 'Other'
  value: null
}

export interface DispatchError_CannotLookup {
  __kind: 'CannotLookup'
  value: null
}

export interface DispatchError_BadOrigin {
  __kind: 'BadOrigin'
  value: null
}

export interface DispatchError_Module {
  __kind: 'Module'
  value: DispatchErrorModule
}

export interface DispatchError_ConsumerRemaining {
  __kind: 'ConsumerRemaining'
  value: null
}

export interface DispatchError_NoProviders {
  __kind: 'NoProviders'
  value: null
}

export interface DispatchError_Token {
  __kind: 'Token'
  value: TokenError
}

export interface DispatchError_Arithmetic {
  __kind: 'Arithmetic'
  value: ArithmeticError
}

export type BalanceStatus = BalanceStatus_Free | BalanceStatus_Reserved

export interface BalanceStatus_Free {
  __kind: 'Free'
}

export interface BalanceStatus_Reserved {
  __kind: 'Reserved'
}

export type DispatchClass = DispatchClass_Normal | DispatchClass_Operational | DispatchClass_Mandatory

export interface DispatchClass_Normal {
  __kind: 'Normal'
}

export interface DispatchClass_Operational {
  __kind: 'Operational'
}

export interface DispatchClass_Mandatory {
  __kind: 'Mandatory'
}

export type Pays = Pays_Yes | Pays_No

export interface Pays_Yes {
  __kind: 'Yes'
}

export interface Pays_No {
  __kind: 'No'
}

export interface DispatchErrorModule {
  index: number
  error: number
}

export type TokenError = TokenError_NoFunds | TokenError_WouldDie | TokenError_BelowMinimum | TokenError_CannotCreate | TokenError_UnknownAsset | TokenError_Frozen | TokenError_Underflow | TokenError_Overflow

export interface TokenError_NoFunds {
  __kind: 'NoFunds'
}

export interface TokenError_WouldDie {
  __kind: 'WouldDie'
}

export interface TokenError_BelowMinimum {
  __kind: 'BelowMinimum'
}

export interface TokenError_CannotCreate {
  __kind: 'CannotCreate'
}

export interface TokenError_UnknownAsset {
  __kind: 'UnknownAsset'
}

export interface TokenError_Frozen {
  __kind: 'Frozen'
}

export interface TokenError_Underflow {
  __kind: 'Underflow'
}

export interface TokenError_Overflow {
  __kind: 'Overflow'
}

export type ArithmeticError = ArithmeticError_Underflow | ArithmeticError_Overflow | ArithmeticError_DivisionByZero

export interface ArithmeticError_Underflow {
  __kind: 'Underflow'
}

export interface ArithmeticError_Overflow {
  __kind: 'Overflow'
}

export interface ArithmeticError_DivisionByZero {
  __kind: 'DivisionByZero'
}

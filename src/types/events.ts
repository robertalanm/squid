import assert from 'assert'
import {EventContext, Result, deprecateLatest} from './support'

export class SubtensorModuleNeuronRegisteredEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'subtensorModule.NeuronRegistered')
  }

  /**
   *  --- Event created when a new neuron account has been registered to 
   *  the chain.
   */
  get isV100(): boolean {
    return this.ctx._chain.getEventHash('subtensorModule.NeuronRegistered') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
  }

  /**
   *  --- Event created when a new neuron account has been registered to 
   *  the chain.
   */
  get asV100(): number {
    assert(this.isV100)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV100
  }

  get asLatest(): number {
    deprecateLatest()
    return this.asV100
  }
}

export class SubtensorModuleWeightsSetEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'subtensorModule.WeightsSet')
  }

  /**
   *  ---- Event created when a caller successfully set's their weights
   *  on the chain.
   */
  get isV100(): boolean {
    return this.ctx._chain.getEventHash('subtensorModule.WeightsSet') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
  }

  /**
   *  ---- Event created when a caller successfully set's their weights
   *  on the chain.
   */
  get asV100(): Uint8Array {
    assert(this.isV100)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV100
  }

  get asLatest(): Uint8Array {
    deprecateLatest()
    return this.asV100
  }
}

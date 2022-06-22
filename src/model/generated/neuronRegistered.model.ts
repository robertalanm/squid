import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, OneToMany as OneToMany_} from "typeorm"
import * as marshal from "./marshal"
import {NeuronRegisteredArgs} from "./neuronRegisteredArgs.model"

@Entity_()
export class NeuronRegistered {
  constructor(props?: Partial<NeuronRegistered>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @Column_("text", {nullable: false})
  name!: string

  @Column_("text", {nullable: false})
  method!: string

  @Column_("text", {nullable: false})
  section!: string

  @Column_("text", {nullable: false})
  versionInfo!: string

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  blockNumber!: bigint

  @Column_("text", {nullable: false})
  blockHash!: string

  @Column_("text", {nullable: false})
  immunityPeriod!: string

  @OneToMany_(() => NeuronRegisteredArgs, e => e.blockId)
  args!: NeuronRegisteredArgs[]
}

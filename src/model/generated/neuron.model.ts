import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_} from "typeorm"
import * as marshal from "./marshal"

@Entity_()
export class Neuron {
  constructor(props?: Partial<Neuron>) {
    Object.assign(this, props)
  }

  /**
   * Neuron address
   */
  @PrimaryColumn_()
  id!: string

  @Column_("text", {nullable: false})
  version!: string

  @Column_("text", {nullable: false})
  ip!: string

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  port!: bigint

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  ipType!: bigint

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  uid!: bigint

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  modality!: bigint

  @Column_("text", {nullable: false})
  hotkey!: string

  @Column_("text", {nullable: false})
  coldkey!: string

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  active!: bigint

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  lastUpdate!: bigint

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  priority!: bigint

  @Column_("numeric", {nullable: false})
  stake!: number

  @Column_("numeric", {nullable: false})
  rank!: number

  @Column_("numeric", {nullable: false})
  trust!: number

  @Column_("numeric", {nullable: false})
  consensus!: number

  @Column_("numeric", {nullable: false})
  incentive!: number

  @Column_("numeric", {nullable: false})
  dividends!: number

  @Column_("numeric", {nullable: false})
  emission!: number

  @Column_("numeric", {array: true, nullable: false})
  bonds!: (number | undefined | null)[]

  @Column_("numeric", {array: true, nullable: false})
  weights!: (number | undefined | null)[]
}

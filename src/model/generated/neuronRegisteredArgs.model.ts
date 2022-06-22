import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import {NeuronRegistered} from "./neuronRegistered.model"

@Entity_()
export class NeuronRegisteredArgs {
  constructor(props?: Partial<NeuronRegisteredArgs>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @Index_()
  @ManyToOne_(() => NeuronRegistered, {nullable: false})
  blockId!: NeuronRegistered

  @Column_("text", {nullable: false})
  name!: string

  @Column_("text", {nullable: false})
  type!: string

  @Column_("text", {nullable: false})
  value!: string
}

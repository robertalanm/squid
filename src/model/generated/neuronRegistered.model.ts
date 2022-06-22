import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import {Era} from "./era.model"
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

  @Index_()
  @ManyToOne_(() => Era, {nullable: false})
  era!: Era

  @Column_("text", {nullable: false})
  signer!: string

  @Index_()
  @ManyToOne_(() => NeuronRegisteredArgs, {nullable: false})
  args!: NeuronRegisteredArgs
}

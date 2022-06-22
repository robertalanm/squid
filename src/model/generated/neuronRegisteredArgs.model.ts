import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_} from "typeorm"

@Entity_()
export class NeuronRegisteredArgs {
  constructor(props?: Partial<NeuronRegisteredArgs>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @Column_("text", {nullable: false})
  name!: string

  @Column_("text", {nullable: false})
  type!: string

  @Column_("text", {nullable: false})
  value!: string
}

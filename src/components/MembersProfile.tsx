import { membersProfile } from "@/utils/members"
import Link from "next/link"
import { Card } from "primereact/card"
import 'primeicons/primeicons.css';

export default function MembersProfile() {
    return (
        <div className="w-full grid md:grid-cols-3 gap-12 pb-12 md:my-0 md:pb-0">
            {
                membersProfile.map(mem => (
                    <Card
                        key={mem.name}
                        title={mem.name}
                        subTitle={mem.role}
                        header={
                            <img src={mem.img} alt={mem.name} className="w-1/2 rounded-full" />
                        }
                        pt={{
                            root: {
                                className: 'w-full rounded-2xl py-4'
                            },
                            title: {
                                className: 'text-xl font-bold font-serif text-center'
                            },
                            subTitle: {
                                className: 'text-sm font-serif text-center'
                            },
                            content: {
                                className: 'font-serif my-2'
                            },
                            header: {
                                className: 'flex justify-center '
                            }
                        }}
                    >
                        <div className="flex justify-center gap-4 mt-6">
                            <Link href={mem.fb} target="_blank"><i className="pi pi-facebook" /></Link>
                            <Link href={mem.ig} target="_blank"><i className="pi pi-instagram" /></Link>
                            <Link href={mem.github} target="_blank"><i className="pi pi-github" /></Link>
                        </div>
                    </Card>
                ))
            }
        </div>
    )
}
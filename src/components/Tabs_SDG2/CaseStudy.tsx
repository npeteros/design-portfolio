'use client';

import { useState } from "react";
import { MenuItem } from "primereact/menuitem";
import { TabMenu } from "primereact/tabmenu";
import 'primeicons/primeicons.css';
import IdeationMap from "./IdeationMap";
import Prototyping from "./Prototyping";
import Results from "./Results";

export default function CaseStudy() {

    const [activeIndex, setActiveIndex] = useState<number>(0)

    const items: MenuItem[] = [
        {
            label: 'Ideation',
            icon: 'pi pi-eye'
        },
        {
            label: 'Prototyping',
            icon: 'pi pi-pencil'
        },
        {
            label: 'Results and Findings',
            icon: 'pi pi-file-edit'
        }
    ]

    function ActiveTab() {
        switch (activeIndex) {
            case 0:
                return <IdeationMap />
            case 1:
                return <Prototyping />
            case 2:
                return <Results />
            default:
                break;
        }
    }

    return (
        <>
            <TabMenu
                model={items}
                onTabChange={(e) => setActiveIndex(e.index)}
                activeIndex={activeIndex}
                pt={{
                    menu: {
                        className: 'bg-neutral-700 rounded-md flex flex-col md:flex-row'
                    },
                    icon: {
                        className: 'mx-2'
                    },
                    menuitem: {
                        className: 'hover:bg-neutral-600 hover:rounded-md'
                    },
                    action: {
                        className: 'py-4 px-2'
                    }
                }}
            />

            <div className="w-full flex gap-12 my-4 md:my-0">
                {ActiveTab()}
            </div>
        </>

    )
}
import React, { useEffect, useState } from 'react'
import Shortcut from './Shortcut';
import { ShortcutItem } from '@/types';


export default function AppMenuShortCut() {
    const [menuItems, setMenuItems] = useState([] as ShortcutItem[])
    // const [menuItems, setMenuItems] = useState( MenuData as ShortcutItem[])

    useEffect(() => {
            fetch("https://api.testvalley.kr/main-shortcut/all")
            .then(response => response.json())
                // 4. Setting *dogImage* to the image url that we received from the response above
            .then((data) => {
                console.log(data)
                setMenuItems(data)
            })
    }, [])
  
  return (
    <div className='py-16 flex flex-wrap justify-between items-center gap-2'>
        { menuItems && menuItems.map((shortcut) => <Shortcut key={shortcut.mainShortcutId} shortcut={shortcut} />)}
    </div>
  )
}

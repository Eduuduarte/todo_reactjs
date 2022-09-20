import * as C from './styles';
import { Item } from '../../types/Item';
import { useState } from 'react';

type Props = {
    item: Item;
    changeDone: (id: number, checked: boolean) => void;
}

export const ListItem = ({ item, changeDone }: Props) => {
    const [isChecked, setIsChecked] = useState(item.done);

    const handleChange = () => {
        changeDone(item.id, !isChecked);
        setIsChecked(!isChecked);
    }

    return (
        <C.Container done={item.done}>
            <input
                type="checkbox"
                checked={item.done}
                onChange={handleChange}
            />
            <label>{item.name}</label> 
        </C.Container>
    );
}
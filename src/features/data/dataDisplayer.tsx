import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useState, useEffect } from 'react';
import { fetchDataAsync } from "./dataSlice";
import { DataInstance, InstanceData } from "./dataAPI";

const DataDisplayer = () => {
    const dispatch = useAppDispatch()
    const data = useAppSelector(state => state.data.data)
    const [dataPresent, setDataPresent] = useState<boolean>(false)

    useEffect(() => {
        if (!dataPresent) {
            dispatch(fetchDataAsync())
            setDataPresent(true)
        }
    }, [])

    const renderedData = data.map((d: DataInstance) => {
        const insideElements = d.data.map((i: InstanceData) => <p>{i.header}: {i.length}</p>)
        return (
            <>
            <h1>{d.header}</h1>
                {insideElements}
            </>
        )
    })

    return (
        <div>
            {renderedData}
        </div>
    )
}

export default DataDisplayer
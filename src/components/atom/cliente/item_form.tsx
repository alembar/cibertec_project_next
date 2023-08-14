"use client";
const ItemForm = (props: any) => {
    return (
        <div className="w-full flex flex-col items-start py-1">
            <label className="font-bold py-1">
                {props.label}:
                {props.required ? (
                    <span className="pl-1 text-RedWine">*</span>
                ) : null}
            </label>
            {props.type === "input" ? (
                <input
                    required={props.required}
                    className="border w-11/12 h-8 p-1"
                    type="text"
                    name={props.name}
                    value={props.value}
                    onChange={props.on_change}
                />
            ) : props.type === "email" ? (
                <input
                    required={props.required}
                    className="border w-11/12 h-8 p-1"
                    type="email"
                    name={props.name}
                    value={props.value}
                    onChange={props.on_change}
                />
            ) : props.type === "combo" ? (
                <>
                    <select
                        required={props.required}
                        className="border w-11/12 h-8 p-1"
                        defaultValue={props.value}
                        onChange={props.on_change}
                        onLoad={props.on_change}
                    >
                        {props.data.map((optionData: any, index: number) => (
                            <option key={index} value={optionData.value}>
                                {optionData.data}
                            </option>
                        ))}
                    </select>
                </>
            ) : props.type === 'number' ? (
                <input
                    required={props.required}
                    className="border w-11/12 h-8 p-1"
                    type="number"
                    name={props.name}
                    value={props.value}
                    onChange={props.on_change}
                />
            ) : (
                <></>
            )}
        </div>
    );
};

export { ItemForm };

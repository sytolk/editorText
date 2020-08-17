import React, { useState, useEffect } from "react";

export default function Counter(props) {
    const [count, setCount] = useState(props.count);

    useEffect(() => {
        if (props.count !== count) {
            setCount(props.count);
        }
    }, [props.count]);

    return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
}

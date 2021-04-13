import React from 'react';

function Calculators(props) {
    const [state, setState] = useState(0);
    const myRef = [];


    const cal = [
        { title: "Add 1" },
        { title: "Add 2" },
        { title: "Add 3" },
    ]

    const handleAdd = (index) => {
        const currentRefStyle = myRef[index].style;
        const color = currentRefStyle.backgroundColor === "grey"


        if (index === 0 && color) {
            currentRefStyle.backgroundColor = "green"
        }
        else if (index === 1 && color) {
            currentRefStyle.backgroundColor = "red"
        }
        else if (index === 2 && color) {
            currentRefStyle.backgroundColor = "orange"
        }

        console.log(index);
        setState(e => e + index + 1);

    }
    return (

        <>

            <div className="main">

                {cal.map((i, index) => (

                    <div
                        key={i.title}
                        style={{
                            width: 350,
                            height: 350,
                            borderRadius: 20,
                            backgroundColor: "white",
                            marginRight: 40,
                        }}>

                        <div
                            ref={ref => myRef[index] = ref}
                            style={{
                                backgroundColor: "grey",
                                width: 350,
                                height: 150,
                                borderRadius: 0,
                                borderTopRightRadius: 15,
                                borderTopLeftRadius: 15,
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",

                            }}>
                            <h1 style={{ color: "white" }}>{i.title}</h1>
                        </div>
                        <div

                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                marginTop: 50,
                            }}>
                            <button
                                onClick={() => handleAdd(index)}
                                style={{
                                    background: "none",
                                    backgroundColor: "none",
                                    border: "none",
                                    color: "dodgerblue",
                                    fontSize: 23
                                }}>
                                {i.title}
                            </button>

                        </div>

                    </div>

                ))}

            </div>
            <div
                style={{
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                    fontSize: 53,
                    color: "white",
                }}>
                {state}
            </div>
        </>

    );
}

export default Calculators;
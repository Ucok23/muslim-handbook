import * as data from "../../data/aqiqah.json";


const Aqiqah = (props) => {
    const dalil = data.dalil;
    return (
        <>
            <h1>Aqiqah</h1>
            <h2>Hukum aqiqah</h2>
            <p>Kebanyakan ulama bersepakat bahwa hukum aqiqah adalah sunnah</p>
            <h2>Dalil Aqiqah</h2>
            <ul>
                {
                    dalil.map((d, index) => {
                        <>
                            <li key={index}>
                                {d.hadits}
                            </li>
                            <li key={index}>
                                {d.arti}
                            </li>
                            <li key={index}>
                                {d.sanad}
                            </li>
                        </>
                    })
                }
            </ul>
        </>
    )
}

export default Aqiqah;
import aqiqah from "../../data/aqiqah"


const Aqiqah = () => {
    const dalil = aqiqah.data.dalil;
    const content = dalil.map((data, key) => 
        <div key={key}>
            <p>{data.hadits}</p>
            <p>{data.arti}</p>
            <p>{data.sanad}</p>
            <br />
        </div>
    );

    return (
        <>
            <h1>Aqiqah</h1>
            <h2>Hukum aqiqah</h2>
            <p>Kebanyakan ulama bersepakat bahwa hukum aqiqah adalah sunnah</p>
            <h2>Dalil Aqiqah</h2>
            <div>
                {content}
            </div>
        </>
    )
}

export default Aqiqah;
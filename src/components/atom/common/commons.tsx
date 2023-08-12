const Title = (props: any) => {
    return <h1 className='uppercase text-center font-bold text-2xl text-DarkBlue'>{props.data}</h1>;
};

const ParagraphTitle = (props: any) => {
    return <p className="pt-5 uppercase font-bold text-lg">{props.data}</p>;
};
const ParagraphData = (props: any) => {
    return <p className="text-DarkBlue pt-2 font-bold text-lg">{props.data}</p>;
};

const GetMultiply = (props: any) =>{
    return props.data[0] * props.data[1];
}


const Loading = () =>{
    return <p>Cargando...</p>
}

export { Title, Loading, ParagraphTitle, ParagraphData, GetMultiply };
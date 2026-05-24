import { notFound } from "next/navigation";

interface Props{
    params:Promise<{
        id: string;
    }>
}

export default async function CategoryPage({params} : Props){

    const {id} = await params;

    if(id !='men' && id != 'women' && id != 'kid'){
        notFound()
    }

    return (
        <>
        <h1>Category Page {id}</h1>
        </>
    )
}
import { Produto } from "@/core"
import { IconShoppingCartPlus } from "@tabler/icons-react"
import Image from "next/image"
import Link from "next/link"

export interface ProdutoItemProps {
    produto:Produto
}

export default function ProdutoItem(props: ProdutoItemProps) {
    const { produto } = props
    return <Link href={`/produto/${produto.id}`}
    className="flex flex-col text-white bg-violet-dark border border-white/10 rounded-xl relative w-[300px]"
    >
    
        <div className="h-48 w-full relative">
            <Image
                src={produto.imagem}
                alt='Imagem do produto'
                className="object-contain"
                fill
            />
        </div>
        <div className="flex-1 flex flex-col gap-3 p-5 border-t border-white/10">
            <span className="text-lg font-semibold">
                {props.produto.nome}
            </span>
            <span className="text-sm border-b border-dashed self-start"> {produto.especificacoes.destaque} </span>
            <div className="flex-1"></div>
            <div className="flex flex-col">
                <span className="text-sm text-gray-400 line-through">
                    de {props.produto.precoBase}
                </span>
                <span className="text-xl font-semibold text-emerald-400">
                    por {props.produto.precoPromocional}
                </span>
            </div>
            <button className="flex justify-center h-8 items-center bg-violet-700 rounded-full hover:border-2 border-emerald-400 ">
                <IconShoppingCartPlus size={20} />
                <span>Adicionar</span>
            </button>

        </div>
    </Link>
}
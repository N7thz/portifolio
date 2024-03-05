import { Params } from '@/@types';
import { Header } from '@/components/header';
import { Main } from '@/components/main';
import { getDictionary } from '@/lib/get-dictionary';

export default async function Home({ params: { lang } }: Params) {

	const dictionary = await getDictionary(lang)
	const { header, main } = dictionary

	return (

		<div
			className="min-h-screen bg-zinc-50 dark:bg-zinc-900"
		>
			<Header header={header} />
			<Main
				header={header}
				main={main}
			/>
			<a href="/src/assets/curriculo-nathan-ferreira.pdf" target="_blank" rel="noopener noreferrer" download>
				Download Catalog
			</a>

		</div>
	)
}





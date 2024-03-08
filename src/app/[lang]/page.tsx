import { Params } from '@/@types';

import { Header } from '@/components/header';
import { Main } from '@/components/main';
import { getDictionary } from '@/lib/get-dictionary';

export default async function Home({ params: { lang } }: Params) {

	const dictionary = await getDictionary(lang)
	const { header, main } = dictionary

	return (

		<div
			className="min-h-screen bg-zinc-50 dark:bg-zinc-950 absolute left-0 right-0"
		>
			<Header header={header} />
			<Main
				header={header}
				main={main}
			/>
		</div>
	)
}





import { getNewsList } from "@/app/_libs/microcms";
import NewsList from "@/app/_components/NewsList";

type Props = {
    params: {
        id: string;
    };
};

export default async function Page({ params }: Props) {
    const { contents: news } = await getNewsList({
        filters: `categories[contains]${params.id}`,
    });

    return <NewsList news={news} />;
}
//182ページ
//カテゴリのタグ別表示がうまくいっていない
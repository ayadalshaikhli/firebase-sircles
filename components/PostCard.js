import Image from "next/image"
import Logo from "../public/vercel.svg"
import { FiBookmark } from "react-icons/fi"
import Link from "next/link"
const PostCard = ( ) => {
    const styles = {
        wrapper: `flex max-w-[46rem] h-[10rem] items-center gap-[1rem] cursor-pointer `,
        authorContainer: `flex gap-[.4rem] `,
        authorImageContainer: `grid place-items-center rounded-full overflow-hidden h-[1.4rem] w-[1.4rem]`,
        authorImage: `object-cover`,
        authorName: `font-semibold `,
        title: `font-bold text-2xl`,
        briefing: `text-[#787878]`,
        articleContainer: `flex items-center justify-between text-[#787878]`,
        articleDetials: `my-2 text-[.8rem]`,
        category: `text-[#F2F3F2] p-1 rounded-full`,
        bookmarkContainer: `cursor-pointer`,
        postDetails: `flex-[2.5] flex flex-col`,

    }
    return (
        <>
        <Link href={`/post/123`}> 
        <div className={styles.wrapper}>
        <div className={styles.postDetails}>
            <div className={styles.authorContainer}>
                <div className={styles.authorImageContainer}>
                    <Image
                        src={Logo}
                        alt="Picture of the author"
                        width={40}
                        height={40}
                        className={styles.authorImage}
                    />
                </div>
                <div className={styles.authorName}>Ayad AlShaikhli</div>
            </div>
            <h1 className={styles.title}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            </h1>
            <div className={styles.briefing}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            </div>
            <div className={styles.articleContainer}>
                <span className={styles.articleDetials} >Jun 15 . 5 min read . <span className={styles.category}>productivity</span> </span>
                <span className={styles.bookmarkContainer}>
                    <FiBookmark className="h-5 w-5"/>
                </span>
            </div>
           
        </div>
        <div className={styles.thumbnailContainer}>
                <Image
                    src={Logo}
                    alt="Picture of the author"
                    width={100}
                    height={100}
                />

            </div>
        </div>
        </Link>
        </>
    )
}
export default PostCard
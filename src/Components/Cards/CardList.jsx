
import Card from './Card'

const CardList = ({ posts, onDeletePost }) => {
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto" >
                    <div className="flex flex-wrap -m-4">
                        {posts.map(post => (
                            <Card key={post.id} post={post} onDelete={onDeletePost} />
                        ))}
                    </div>
                </div>

            </section>

        </>

    )

}

export default CardList
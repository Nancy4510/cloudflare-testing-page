import Image from "next/image";

export default function AboutPage() {
    return (
        <main>
            <div className="hero flex flex-col border border-solid border-red-500 p-5 m-10 h-150
">
                <h1 className="text-center font-bold text-4xl pt-15">About Us</h1>
                <br></br>
                <p className="">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat vel libero atque est? Saepe iste, maxime nihil eos tenetur expedita veritatis voluptates eveniet quos distinctio. Aperiam eaque repudiandae minus sequi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum illum asperiores iste dolores officiis. Non corporis maiores quam debitis voluptatem aperiam veniam minus! Porro molestias mollitia fugit blanditiis nisi aperiam.</p>

                <p className="pt-8">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat vel libero atque est? Saepe iste, maxime nihil eos tenetur expedita veritatis voluptates eveniet quos distinctio. Aperiam eaque repudiandae minus sequi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum illum asperiores iste dolores officiis. Non corporis maiores quam debitis voluptatem aperiam veniam minus! Porro molestias mollitia fugit blanditiis nisi aperiam.</p>
            </div>

            <br></br>

            <h2 className="text-center font-bold text-4xl">Meet the team</h2>

            <div className="flex">
                
                <div className="border border-solid border-red-500">
                    <Image 
                    className="jane-smith-img h-90 object-contain"
                    src="/imgs/jane-smith.jpg"
                    alt="A profile picture of Jane Smith"
                    width={300}
                    height={300}
                    />

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, laborum totam suscipit repellat a autem minus voluptatem quaerat incidunt aut. In minima accusantium reiciendis porro laborum delectus. Fugit, vitae repellat.</p>
                </div>

                <br></br>

                <div className="border border-solid border-red-500">
                <Image 
                className=""
                src="/imgs/diego-hernandez.jpg"
                alt="A profile picture of Diego Hernandez"
                width={300}
                height={300}
                />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque voluptatem inventore et obcaecati, veniam ipsam optio doloremque quis commodi doloribus saepe architecto odio est illum, dolorem, eaque necessitatibus accusantium iusto.</p>
                </div>

                <br></br>

                <div className="border border-solid border-red-500">
                <Image 
                className=""
                src="/imgs/puggster-jones.jpg"
                alt="A profile picture of a dog who is a pug and the mascot."
                width={300}
                height={300}
                />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eveniet sunt nihil explicabo impedit consequatur ducimus qui, deleniti rerum dolor, ratione veniam harum excepturi doloremque non! Laborum tempore labore blanditiis?</p>
                </div>
                
            </div>

        <br></br>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quibusdam officia porro recusandae eum soluta excepturi dolore, doloremque ad veniam accusantium, quod illum vitae saepe fugit nesciunt iste consequatur iusto! Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur facere vitae neque voluptate dolorum quas illo molestiae ratione quos est autem magni, impedit eius recusandae error ullam cupiditate iusto. Labore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem numquam non fugiat dolorem sunt assumenda consequatur dicta, praesentium sed vitae, dolorum laboriosam, delectus ipsum saepe excepturi quam facilis dignissimos quae?</p>

            <div className="contact-section text-center ">
                <h1 className="font-bold text-4xl">Contact Us</h1>
                <address>
                    <p>email: corp@emailus.com</p>
                    <p>telephone:212-234-0987</p>
                </address>
            </div>
        </main>
    )
}
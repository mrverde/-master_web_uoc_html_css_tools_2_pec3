import React from "react";

import chineseTemple from '../../images/buddha-tempel-1468928.jpg'

const PageBlog = () => {
    return <article className="block pb-40">
        <div className="box-border w-full m-0">
            <div className="px-8 py-16 mb-8 bg-cover rounded bg-bgcolor bg-jumbotron-image min-h-300">
                <div className="w-full max-w-5xl px-1 mx-auto">
                    <h1 className="mt-0 text-6xl font-light text-white stroke">Blog Article or Information / Bio Page</h1>
                    <p className="mt-4 text-xl font-light text-white stroke">by Author One</p>
                </div>
            </div>
        </div>
        <div className="flex justify-center pb-12 m-30">
            <div className="max-w-5xl p-12 bg-white shadow">
                <p className="mt-0 mb-4 font-bold">Far far away, behind the word mountains, far from the countries Vokalia and
                    Consonantia, there live the blind texts.</p>
                <blockquote className="flex flex-col items-center justify-center mx-64 mb-5 text-sm text-center" cite="https://es.wikiquote.org/wiki/Buda_Gautama">
                    <p className="italic ">
                        "Far far away, behind the word mountains, far from the countries Vokalia and
                        Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right
                        at the coast of the Semantics, a large language ocean. Far far away, behind the
                        word mountains."</p>
                    <strong className="mt-2">Zu Ming Yu</strong>
                </blockquote>

                <p className="mb-10">Far far away, behind the word mountains, far from the countries Vokalia and
                    Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right
                    at the coast of the Semantics, a large language ocean. Far far away, behind the
                    word mountains. Far far away, behind the word mountains, far from the countries
                    Vokalia and Consonantia, there live the blind texts.</p>
                <hr className="my-4" />
                <ol className="pl-8 pr-10 my-8">
                    <li className="list-none">
                        <h4 className="text-xl font-bold">Item One</h4>
                        <p className="mt-0 mb-4">Far far away, behind the word mountains, far from the countries Vokalia and
                            Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at
                            the coast of the Semantics.</p>
                    </li>
                    <li className="list-none" >
                        <h4 className="text-xl font-bold">Item Two</h4>
                        <p className="mt-0 mb-4">Far far away, behind the word mountains, far from the countries Vokalia and
                            Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at
                            the coast of the Semantics, a large language ocean.</p>
                    </li>
                    <li className="list-none">
                        <h4 className="text-xl font-bold">Item Three</h4>
                        <p className="mt-0 mb-4">Far far away, behind the word mountains, far from the countries Vokalia and
                            Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at
                            the coast of the Semantics, a large language ocean.</p>
                    </li>
                </ol>
                <hr className="my-4" />
                <p className="mt-10 mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                <p className="mt-0 mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                    there live the blind texts. Separated they live in Bookmarksgrove right at the coast
                    of the Semantics, a large language ocean. Far far away, behind the word mountains, far
                    from the countries Vokalia and Consonantia, there live the blind texts. Separated they
                    live in Bookmarksgrove</p>
                <img className="block w-full my-10" src={chineseTemple} alt="Chinese temple" />
                <blockquote className="flex flex-col items-center justify-center mx-64 text-sm text-center" cite="https://es.wikiquote.org/wiki/Buda_Gautama">
                    <p className="italic">
                        "Far far away, behind the word mountains, far from the countries Vokalia and
                        Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right
                        at the coast of the Semantics, a large language ocean. Far far away, behind the
                        word mountains."</p><br />
                    <strong className="mt-2">Zu Ming Yu</strong>
                </blockquote>
            </div>
        </div>
    </article>
}

export default PageBlog;
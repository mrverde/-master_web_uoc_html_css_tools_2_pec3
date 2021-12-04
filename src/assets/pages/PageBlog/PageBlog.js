import React from "react";

import chineseTemple from '../../images/buddha-tempel-1468928.jpg'
import "./PageBlog.scss"

const PageBlog = () => {
    return <article>
        <div>
            <div >
                <div>
                    <h1 >Blog Article or Information / Bio Page</h1>
                    <p >by Author One</p>
                </div>
            </div>
        </div>
        <div>
            <div>
                <p >Far far away, behind the word mountains, far from the countries Vokalia and
                    Consonantia, there live the blind texts.</p>
                <blockquote cite="https://es.wikiquote.org/wiki/Buda_Gautama">
                    <p>
                        Far far away, behind the word mountains, far from the countries Vokalia and
                        Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right
                        at the coast of the Semantics, a large language ocean. Far far away, behind the
                        word mountains.</p>
                    <strong>Zu Ming Yu</strong>
                </blockquote>

                <p >Far far away, behind the word mountains, far from the countries Vokalia and
                    Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right
                    at the coast of the Semantics, a large language ocean. Far far away, behind the
                    word mountains. Far far away, behind the word mountains, far from the countries
                    Vokalia and Consonantia, there live the blind texts.</p>
                <hr />
                <ol >
                    <li >
                        <h4 >Item One</h4>
                        <p >Far far away, behind the word mountains, far from the countries Vokalia and
                            Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at
                            the coast of the Semantics.</p>
                    </li>
                    <li >
                        <h4 >Item Two</h4>
                        <p >Far far away, behind the word mountains, far from the countries Vokalia and
                            Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at
                            the coast of the Semantics, a large language ocean.</p>
                    </li>
                    <li >
                        <h4 >Item Three</h4>
                        <p >Far far away, behind the word mountains, far from the countries Vokalia and
                            Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at
                            the coast of the Semantics, a large language ocean.</p>
                    </li>
                </ol>
                <hr />
                <p >Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                <p >Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                    there live the blind texts. Separated they live in Bookmarksgrove right at the coast
                    of the Semantics, a large language ocean. Far far away, behind the word mountains, far
                    from the countries Vokalia and Consonantia, there live the blind texts. Separated they
                    live in Bookmarksgrove</p>
                <img src={chineseTemple} alt="Chinese temple" />
                <blockquote cite="https://es.wikiquote.org/wiki/Buda_Gautama">
                    <p >
                        Far far away, behind the word mountains, far from the countries Vokalia and
                        Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right
                        at the coast of the Semantics, a large language ocean. Far far away, behind the
                        word mountains. </p><br />
                    <strong>Zu Ming Yu</strong>
                </blockquote>
            </div>
        </div>
    </article>
}

export default PageBlog;
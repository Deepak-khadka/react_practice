import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [ blogs ] = useState([
        { title: 'My new Website', body: 'Lorem ipsum ...', author:'mario', id: 1},
        { title: 'Deepak Khadka', body: 'Lorem ipsum ...', author:'yoshi', id: 2},
        { title: 'Web dev top tips', body: 'Lorem ipsum ...', author:'rush', id: 3},
    ]);

    return (
        <div className="home">
            {
              <BlogList blogs={blogs}/>
            }

        </div>
    )
}
export default Home;

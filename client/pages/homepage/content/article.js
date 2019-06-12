import React, {lazy, Suspense} from 'react';

const Blogs_Column = lazy(() => import('./blogs_column'));
import Recommend_Column from './recommend_column';
import Loading from '../../../components/loading';

const create_loading = (id) => {
    return (
        <div id={id}>
            <Loading/>
        </div>
    )
};

class Index extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id={'article'}>
                <Suspense fallback={create_loading('article_column')}>
                    <Blogs_Column/>
                </Suspense>
                <Recommend_Column/>
            </div>
        )
    }
}

export default Index;
import React, {lazy, Suspense} from 'react';

const Columns = lazy(() => import('./columns'));
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
                    <Columns/>
                </Suspense>
                <Recommend_Column/>
            </div>
        )
    }
}

export default Index;
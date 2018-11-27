import React from 'react';

const PrivateRoute = ({component: ChildComponent, layout: Layout, path, ...rest}) => {
    return <Route {...rest} render={props => {
        if (this.props.auth.isLoading) {
        return <em>Loading...</em>;
        } else if (!this.props.auth.isAuthenticated) {
        const interpolatedPath = `/demo${path}`;
        return <Redirect to={interpolatedPath} />;
        } else {
        return (
            <Layout>
                <ChildComponent {...props} />
            </Layout>
        );
        }
    }} />;
}
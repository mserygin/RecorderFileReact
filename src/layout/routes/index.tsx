import React from "react";
import {Route} from "react-router-dom"

type RouterType = {
    component: React.FC,
    roles: string[],
    path: string,
    redirect?: React.FC,
    exact?: boolean,
    key: number
};

const grantPermission = (requestedRoles: string[]): boolean => {
    const permittedRoles = toString(localStorage.getItem('role'));
    return requestedRoles.includes(permittedRoles);
};

const getComponentByName = (Com: any) => <Com/>

const RoleBasedRouting = ({
                              path,
                              component,
                              redirect,
                              roles,
                              key
                          }: RouterType) => {
    return (
        <Route
            key={key}
            path={path}
            element={
                grantPermission(roles)
                    ? getComponentByName(component)
                    : getComponentByName(redirect)
            }

        />
    )
}

export default RoleBasedRouting

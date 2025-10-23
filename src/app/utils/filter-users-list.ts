import { IUser } from '../interfaces/user/user.interface';
import { isWithinInterval } from 'date-fns';
import { IFilterOptions } from '../interfaces/filter-options.interface';

const filterUsersList = (filterOptions: IFilterOptions, userList: IUser[]): IUser[] => {
    let filteredList = [];
    filteredList = filterUsersListByName(filterOptions.name, userList);
    filteredList = filterUsersListByStatus(filterOptions.status, filteredList);
    filteredList = filterUsersListByDate(filterOptions.startDate, filterOptions.endDate, filteredList);

    return filteredList;
}
const filterUsersListByName = (name: string | undefined, userList: IUser[]): IUser[] => {
    const NAME_NOT_TYPED = name === undefined;
    if (NAME_NOT_TYPED) {
        return userList;
    }
    const FILTERED_LIST = userList.filter((user) => user.nome.toLowerCase().includes(name.toLowerCase()));
    return FILTERED_LIST;
}
const filterUsersListByStatus = (status: boolean | undefined, userList: IUser[]): IUser[] => {
    if (status === undefined) {
        return userList;
    }
    const FILTERED_LIST = userList.filter((user) => user.ativo === status);
    return FILTERED_LIST;
}
const filterUsersListByDate = (startDate: Date | undefined, endDate: Date | undefined, userList: IUser[]): IUser[] => {
    const DATES_NOT_SELECTED = startDate === undefined || endDate === undefined;
    if (DATES_NOT_SELECTED) {
        return userList;
    }
    const FILTERED_LIST = userList.filter((user) => {
        const userDate = new Date(user.dataCadastro);
        return isWithinInterval(userDate, {
            start: startDate,
            end: endDate,
        });
    });

    return FILTERED_LIST;
}

export { filterUsersList };


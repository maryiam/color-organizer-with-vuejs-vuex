/* eslint-disable no-console */
import { GetterTree, Module, MutationTree } from 'vuex';
import { v4 } from 'uuid';

const namespaced = true;

const mutations: MutationTree<ColorsModuleState> = {
  addColor: (state: ColorsModuleState, {title, color}: { title: string, color: string }) => state.list.push({
    title,
    color,
    timestamp: new Date().toString(),
    rating: 0,
    id: v4()
  }),
  removeColor: (state: ColorsModuleState, index: number) => state.list.splice(index, 1),
  rateColor: ({list}: { list: ColorStructure [] }, {index, rating}: { index: number, rating: number }) => list[ index ].rating = rating,
  changeOrder: (state: ColorsModuleState) => state.orderBy === 'DESC' ? state.orderBy = 'ASC' : state.orderBy = 'DESC'
};

const getters: GetterTree<ColorsModuleState, RootState> = {
  sortedColors: ({list, orderBy}: { list: ColorStructure []; orderBy: string }) => {
    const sortRule = orderBy === 'DESC' ? -1 : 1;
    return list.sort((first: ColorStructure, second: ColorStructure) =>
      new Date(first.timestamp) < new Date(second.timestamp) ? sortRule : -(sortRule));
  }
};

export const colors: Module<ColorsModuleState, RootState> = {
  namespaced,
  state() {
    return {
      list: [
        {
          'id': '8658c1d0-9eda-4a90-95e1-8001e8eb6036',
          'title': 'Ocean Blue',
          'color': '#0070ff',
          'rating': 3,
          'timestamp': 'Sat Mar 12 2016 16:12:09 GMT-0800 (PST)'
        },
        {
          'id': 'f9005b4e-975e-433d-a646-79df172e1dbb',
          'title': 'Tomato',
          'color': '#d10012',
          'rating': 2,
          'timestamp': 'Fri Mar 11 2016 12:00:00 GMT-0800 (PST)'
        },
        {
          'id': '58d9caee-6ea6-4d7b-9984-65b145031979',
          'title': 'Lawn',
          'color': '#67bf4f',
          'rating': 1,
          'timestamp': 'Thu Mar 10 2016 01:11:12 GMT-0800 (PST)'
        },
        {
          'id': 'a5685c39-6bdc-4727-9188-6c9a00bf7f95',
          'title': 'Party Pink',
          'color': '#ff00f7',
          'rating': 5,
          'timestamp': 'Wed Mar 9 2016 03:26:00 GMT-0800 (PST)'
        }
      ],
      orderBy: 'DESC'
    };
  },
  mutations,
  getters
};

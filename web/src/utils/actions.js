import { CANCEL, SUBMIT, SELECT
} from '@/store/actions.type';

const actions = [
];


export const fetchViewActions = (view) => actions.filter(item => item.views.includes(view));
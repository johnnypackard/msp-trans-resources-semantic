import { put, call, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getBusinesses(action) {
    try {
        const businessResponse = yield call(axios.get, '/api/resources');
        yield put({type: 'UPDATE_RESOURCES', payload: resourcesResponse.data})
    } catch (error) {
        console.log('error in GET all');
    }
} // end GET resources

function* businessesSaga() {
    yield takeLatest('GET_RESOURCES', getResources);
}

export default resourcesSaga;
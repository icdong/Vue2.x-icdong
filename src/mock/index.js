/*
 * @Description: mock假数据
 * @Author: Daito Chai
 * @Date: 2020-11-22 16:57:24
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-11-23 14:50:47
 */

import Mock from 'mockjs';

import { findUserName, } from './modules/user'

Mock.mock(RegExp('/api/users/findUserName.*'), findUserName);

export default Mock
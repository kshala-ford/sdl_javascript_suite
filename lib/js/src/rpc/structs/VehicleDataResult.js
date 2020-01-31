/* eslint-disable camelcase */
/*
* Copyright (c) 2020, SmartDeviceLink Consortium, Inc.
* All rights reserved.
*
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
* Redistributions of source code must retain the above copyright notice, this
* list of conditions and the following disclaimer.
*
* Redistributions in binary form must reproduce the above copyright notice,
* this list of conditions and the following
* disclaimer in the documentation and/or other materials provided with the
* distribution.
*
* Neither the name of the SmartDeviceLink Consortium Inc. nor the names of
* its contributors may be used to endorse or promote products derived
* from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
* AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
* IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
* ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
* LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
* CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
* SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
* INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
* CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
* ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
* POSSIBILITY OF SUCH DAMAGE.
*/

import { RpcStruct } from '../RpcStruct.js';
import { VehicleDataResultCode } from '../enums/VehicleDataResultCode.js';
import { VehicleDataType } from '../enums/VehicleDataType.js';

/**
 * Individual published data request result
 */
class VehicleDataResult extends RpcStruct {
    /**
     * @constructor
     */
    constructor (parameters) {
        super(parameters);
    }

    /**
     * @param {VehicleDataType} type - Defined published data element type.
     * @return {VehicleDataResult}
     */
    setDataType (type) {
        this.validateType(VehicleDataType, type);
        this.setParameter(VehicleDataResult.KEY_DATA_TYPE, type);
        return this;
    }

    /**
     * @return {VehicleDataType}
     */
    getDataType () {
        return this.getObject(VehicleDataType, VehicleDataResult.KEY_DATA_TYPE);
    }

    /**
     * @param {VehicleDataResultCode} code - Published data result code.
     * @return {VehicleDataResult}
     */
    setResultCode (code) {
        this.validateType(VehicleDataResultCode, code);
        this.setParameter(VehicleDataResult.KEY_RESULT_CODE, code);
        return this;
    }

    /**
     * @return {VehicleDataResultCode}
     */
    getResultCode () {
        return this.getObject(VehicleDataResultCode, VehicleDataResult.KEY_RESULT_CODE);
    }

    /**
     * @param {String} type - Type of requested oem specific parameter
     * @return {VehicleDataResult}
     */
    setOemCustomDataType (type) {
        this.setParameter(VehicleDataResult.KEY_OEM_CUSTOM_DATA_TYPE, type);
        return this;
    }

    /**
     * @return {String}
     */
    getOemCustomDataType () {
        return this.getParameter(VehicleDataResult.KEY_OEM_CUSTOM_DATA_TYPE);
    }
}

VehicleDataResult.KEY_DATA_TYPE = 'dataType';
VehicleDataResult.KEY_RESULT_CODE = 'resultCode';
VehicleDataResult.KEY_OEM_CUSTOM_DATA_TYPE = 'oemCustomDataType';

export { VehicleDataResult };
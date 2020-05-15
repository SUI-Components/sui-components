import React from 'react'
import './index.scss'

import BehaviorDevice from '../../../../components/behavior/device/src'

const BehaviourDeviceDisplayer = props => (
  <div className="DemoBehaviourDeviceDisplayer">
    {Object.entries(props).map(([key, value]) => (
      <p key={key}>
        <b>{key}:</b> {value.toString()}
      </p>
    ))}
  </div>
)

const Demo = () => (
  <div>
    <h1>BehaviorDevice</h1>
    <div className="DemoBehaviorDevice-section">
      <h2>Default</h2>
      <BehaviorDevice>
        <BehaviourDeviceDisplayer />
      </BehaviorDevice>
      <h2>DeviceType Forcing</h2>
      {Object.values(BehaviorDevice.deviceTypes).map(deviceType => (
        <BehaviorDevice deviceType={deviceType} key={deviceType}>
          <BehaviourDeviceDisplayer />
        </BehaviorDevice>
      ))}
    </div>
    <h1>BehaviorDevice View</h1>
    <div className="DemoBehaviorDevice-section">
      <h2>Renders its children only if the given device condition matches</h2>
      {['Mobile', 'Tablet', 'SmartTv', 'Console', 'Wearable', 'Desktop'].reduce(
        (accumulator, current, index, source) => {
          const response = Array.isArray(accumulator) ? accumulator : []
          const currentDeviceName = current
          const getBehaviorDeviceViewComponent = deviceName =>
            BehaviorDevice[`${deviceName}View`]
          response.push(
            <div key={index}>
              <h3>{`BehaviorDevice.${currentDeviceName}View`}</h3>
              {source.map(deviceName => {
                const BehaviorDeviceViewComponent = getBehaviorDeviceViewComponent(
                  deviceName
                )
                return (
                  <div key={`${currentDeviceName}View-${deviceName}`}>
                    <p>
                      {`View-${deviceName} with ${currentDeviceName}:`}
                      <b>
                        <BehaviorDeviceViewComponent
                          deviceType={currentDeviceName}
                        >
                          &nbsp;rendered with {deviceName}
                        </BehaviorDeviceViewComponent>
                      </b>
                    </p>
                  </div>
                )
              })}
            </div>
          )
          return response
        }
      )}
      <h3>BehaviorDevice.CustomView</h3>
      <div key="CustomView">
        <p>
          CustomView: condition=true
          <b>
            <BehaviorDevice.CustomView condition>
              &nbsp;rendered with condition true
            </BehaviorDevice.CustomView>
          </b>
        </p>
      </div>
    </div>
  </div>
)

export default Demo

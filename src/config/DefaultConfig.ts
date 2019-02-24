import ConfigInterface from '~/config/ConfigInterface'

const defaultFileName = 'dump.html'

const DefaultConfig: ConfigInterface = {
  defaultFileName,
  defaultFilePath: defaultFileName,
  defaultHost: 'localhost', // '127.0.0.1'
  defaultPort: 9000,
  defaultNoOpen: false
}

export default DefaultConfig

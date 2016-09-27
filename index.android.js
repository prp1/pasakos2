import { AppRegistry } from 'react-native';

import App from './app/app.component';

AppRegistry.registerComponent('pasakos2', () => App);



/*


import React, { Component } from 'react';
import { AppRegistry, Text, View, ScrollView, ListView, ToolbarAndroid } from 'react-native';
import Drawer from 'react-native-drawer'
import Button from 'react-native-button';

class Application extends Component {  

    isOpened = false;

    toggleSideDrawer() {
        this.isOpened ? this._drawer.close() : this._drawer.open();
        this.isOpened = !this.isOpened;
    }


  render () {
    return (
      <Drawer
        ref={(ref) => this._drawer = ref}
        content={<SideContent />}
        openDrawerOffset={100}
        open={false}
        styles={drawerStyles}
        >
        <MainView 
            toggleSideDrawer={this.toggleSideDrawer.bind(this)}
        />
      </Drawer>
    )
  }
}

class MainView extends Component {

  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        'row 1', 
        'row 2',
        'row 2',
        'row 2',
        'row 2',
        'row 2',
        'row 2',
        'row 2',
        'row 2',
        'row 2',
        'row 2',
        'row 2',
        'row 2',
        'row 2',
        'row 5',
        'row 2',
        'row 2',
        'row 2',
        'row 2',
        'row 2',
        'row 6',
        'row 6',
        'row 6',
        'row 6',
        'row 6',
        'row 6',
        'row 6',
        'row 6',
        'row 6',
        'row 6',
        'row 6',
        'row 9',
        ]),
    };
  }

  _handlePress() {
    console.log('Pressed!');
  }  

  render() {
    return (
        <View style={{flex: 1}}>
          <ScrollView>




              <ListView
                dataSource={this.state.dataSource}
                renderRow={(rowData) => <Text>{rowData}</Text>}
              />


          </ScrollView>
          <View>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{flex: 1, height: 50, backgroundColor: 'powderblue'}}>
              <Button
                style={{fontSize: 20, color: 'green'}}
                styleDisabled={{color: 'red'}}
                onPress={() => this.props.toggleSideDrawer()}>
                Press Me!
              </Button>          

            </View>
            <View style={{flex: 1,height: 50, backgroundColor: 'skyblue'}} />
            <View style={{flex: 1, height: 50, backgroundColor: 'steelblue'}} />
          </View>
          </View>




        </View>
    );
  }
}
          // <View>
          //   <Text>footer</Text>
          // </View>

class SideContent extends Component {
  render() {
    return (
      <Text>Side content!</Text>
    );
  }
}


const drawerStyles = {
  drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
  main: {paddingLeft: 3},
}









class FlexDimensionsBasics extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'powderblue'}} />
        <View style={{flex: 1, backgroundColor: 'skyblue'}} />
        <View style={{flex: 2, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
};

class WithFooter extends Component {
  render() {
    return (
        <View style={{flex: 1}}>
          <ScrollView><Text>main</Text></ScrollView>
          <View><Text>footer</Text></View>
        </View>
    );
  }
};

AppRegistry.registerComponent('pasakos', () => Application);



*/














////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////



// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View
// } from 'react-native';

// class Application extends React.Component {
//   render() {
//     const menu = <Menu navigator={navigator}/>;

//     return (
//       <SideMenu menu={menu}>
//         <ContentView/>
//       </SideMenu>
//     );
//   }
// }

// class ContentView extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Welcome to React Native!
//         </Text>
//         <Text style={styles.instructions}>
//           To get started, edit index.android.js
//         </Text>
//         <Text style={styles.instructions}>
//           Double tap R on your keyboard to reload,{'\n'}
//           Shake or press menu button for dev menu
//         </Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

// AppRegistry.registerComponent('pasakos', () => pasakos);




////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////




// import React, { Component } from 'react';
// import { AppRegistry, View } from 'react-native';

// import { SideMenu }  from 'react-native-side-menu';

// class ContentView extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Welcome to React Native!
//         </Text>
//         <Text style={styles.instructions}>
//           To get started, edit index.ios.js
//         </Text>
//         <Text style={styles.instructions}>
//           Press Cmd+R to reload,{'\n'}
//           Cmd+Control+Z for dev menu
//         </Text>
//       </View>
//     );
//   }
// }

// class Application extends React.Component {
//   render() {
//     const menu = <Menu navigator={navigator}/>;

//     return (
//       <SideMenu menu={menu}>
//         <ContentView/>
//       </SideMenu>
//     );
//   }
// }




// class FlexDimensionsBasics extends Component {
//   render() {
//     return (
//       // Try removing the `flex: 1` on the parent View.
//       // The parent will not have dimensions, so the children can't expand.
//       // What if you add `height: 300` instead of `flex: 1`?
//       <View style={{flex: 1}}>
//         <View style={{flex: 1, backgroundColor: 'powderblue'}} />
//         <View style={{flex: 1, backgroundColor: 'skyblue'}} />
//         <View style={{flex: 2, backgroundColor: 'steelblue'}} />
//       </View>
//     );
//   }
// };

// AppRegistry.registerComponent('pasakos', () => FlexDimensionsBasics);




// import React, { Component } from 'react';
// import { AppRegistry, Text, View } from 'react-native';

// class Greeting extends Component {
//   render() {
//     return (
//       <Text>Hello {this.props.name}!</Text>
//     );
//   }
// }

// class LotsOfGreetings extends Component {
//   render() {
//     return (
//       <View style={{alignItems: 'center'}}>
//         <Greeting name='Rexxar' />
//         <Greeting name='Jaina' />
//         <Greeting name='Valeera' />
//       </View>
//     );
//   }
// }

// AppRegistry.registerComponent('pasakos', () => LotsOfGreetings);


// import React, { Component } from 'react';
// import { AppRegistry, Image } from 'react-native';

// class Bananas extends Component {
//   render() {
//     let pic = {
//       uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
//     };
//     return (
//       <Image source={pic} style={{width: 193, height: 110}}/>
//     );
//   }
// }

// AppRegistry.registerComponent('pasakos', () => Bananas);

// import React, { Component } from 'react';
// import { AppRegistry, Text } from 'react-native';

// class HelloWorldApp extends Component {
//   render() {
//     return (
//       <Text>Hello world!</Text>
//     );
//   }
// }

// AppRegistry.registerComponent('pasakos', () => HelloWorldApp);

// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View
// } from 'react-native';

// class pasakos extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Welcome to React Native!
//         </Text>
//         <Text style={styles.instructions}>
//           To get started, edit index.android.js
//         </Text>
//         <Text style={styles.instructions}>
//           Double tap R on your keyboard to reload,{'\n'}
//           Shake or press menu button for dev menu
//         </Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

// AppRegistry.registerComponent('pasakos', () => pasakos);

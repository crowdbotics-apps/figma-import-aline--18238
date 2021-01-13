import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"
import { connect } from "react-redux"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  static navigationOptions = ({ navigation }) => {
    return { headerLeft: <SlideMenuIcon navigationProps={navigation} /> }
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_10414_182}>
        <View style={styles.View_10414_183} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9d78/1eba/283b678fbef9013b3806cb139127c2ac"
          }}
          style={styles.ImageBackground_10414_184}
        />
        <View style={styles.View_10414_185}>
          <Text style={styles.Text_10414_185}>Scan at entrance</Text>
        </View>
        <View style={styles.View_10414_186}>
          <Text style={styles.Text_10414_186}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitant
            maecenas dui nunc sed in vestibulum in sem. Varius nulla lacus,
            imperdiet accumsan egestas vivamus. Tellus bibendum velit orci, sit
            vulputate vitae. Faucibus volutpat duis fermentum at volutpat
            malesuada scelerisque.
          </Text>
        </View>
        <View style={styles.View_10414_187}>
          <Text style={styles.Text_10414_187}>Eduardo Mccoy</Text>
        </View>
        <View style={styles.View_10414_188}>
          <Text style={styles.Text_10414_188}>VIP Pass</Text>
        </View>
      </View>
      <View style={styles.View_10414_189}>
        <View style={styles.View_10414_190}>
          <Text style={styles.Text_10414_190}>My ticket</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5473/8522/75a538e652ccd40f7a4021a4379eb31c"
          }}
          style={styles.ImageBackground_10414_191}
        />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_10414_182: {
    width: 375,
    height: 812,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_10414_183: {
    width: 375,
    minWidth: 375,
    height: 155,
    minHeight: 155,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(243, 53, 100, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  ImageBackground_10414_184: {
    width: 184,
    minWidth: 184,
    height: 179,
    minHeight: 179,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 96,
    top: 100,
    resizeMode: "cover",
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7
  },
  View_10414_185: {
    width: 247,
    minWidth: 247,
    minHeight: 99,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 64,
    top: 286
  },
  Text_10414_185: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10414_186: {
    width: 327,
    minWidth: 327,
    minHeight: 93,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 24,
    top: 578
  },
  Text_10414_186: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10414_187: {
    width: 133,
    minWidth: 133,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 122,
    top: 434
  },
  Text_10414_187: {
    color: "rgba(175, 175, 175, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10414_188: {
    width: 112,
    minWidth: 112,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 132,
    top: 406
  },
  Text_10414_188: {
    color: "rgba(243, 53, 100, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10414_189: {
    width: 375,
    minWidth: 375,
    height: 90,
    minHeight: 90,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(249, 251, 255, 0)",
    overflow: "hidden"
  },
  View_10414_190: {
    width: 204,
    minWidth: 204,
    minHeight: 30,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 85,
    top: 40
  },
  Text_10414_190: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10414_191: {
    width: 27,
    height: 27.000003814697266,
    top: 41,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16
  },
  View_2: { height: 812 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)

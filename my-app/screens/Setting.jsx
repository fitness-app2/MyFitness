import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View ,TouchableOpacity} from "react-native";


const Dark = () => {
  return (
    <View style={styles.dark}>
      <Image
        style={styles.evaarrowBackOutlineIcon}
        contentFit="cover"
        source={require("../assets/evaarrowbackout.png")}
      />
      <Text style={[styles.home, styles.homeFlexBox]}>Home</Text>
      <Text style={styles.louiseJoyKing}>Ommaima Aouini</Text>
      <Text style={[styles.louisejoykemailcom, styles.birminghamUkTypo]}>
      OmmaimaAouini@email.com
      </Text>
      <Text style={[styles.birminghamUk, styles.birminghamUkTypo]}>
        Nour Jaafar, TN
      </Text>
      <Image
        style={styles.darkChild}
        contentFit="cover"
        source={require("../assets/Ouini.jpg")}
      />
    
      <Text style={[styles.settings, styles.alertsTypo]}>Settings</Text>
      
      <View style={styles.groupParent}>
     <TouchableOpacity>
        <View style={styles.groupLayout1}>
          <View style={[styles.rectangleWrapper, styles.rectanglePosition]}>
            <View style={[styles.groupChild, styles.groupPosition]} />
          </View>
          <View style={styles.alertsWrapper}>
            <Text style={[styles.alerts, styles.alertsText]}>Alerts</Text>
          </View>
          <View style={styles.groupWrapper}>
            <Image
              style={styles.frameChildLayout}
              contentFit="cover"
              source={require("../assets/group14.png")}
            />
          </View>
        </View>
        </TouchableOpacity>
        <View style={[styles.groupView, styles.groupLayout]}>
          <View style={[styles.rectangleParent, styles.groupLayout]}>
            <View style={[styles.groupItem, styles.groupLayout]} />
            <View style={[styles.lineParent, styles.linePosition]}>
              <View style={styles.frameLayout} />
              <View style={[styles.frameInner, styles.frameLayout]} />
            </View>
          </View>
          <View style={styles.alertsWrapper}>
            <Text style={[styles.editProfile, styles.alertsText]}>
              Edit profile
            </Text>
            <Text style={[styles.bankData, styles.alertsText]}>Bank data</Text>
            <Text style={[styles.bankData, styles.alertsText]}>Contacts</Text>
          </View>
          <View style={styles.groupWrapper}>
            <Image
              style={styles.frameChildLayout}
              contentFit="cover"
              source={require("../assets/group141.png")}
            />
            <Image
              style={[styles.frameChild1, styles.frameChildLayout]}
              contentFit="cover"
              source={require("../assets/group13.png")}
            />
            <Image
              style={[styles.frameChild1, styles.frameChildLayout]}
              contentFit="cover"
              source={require("../assets/group12.png")}
            />
          </View>
        </View>
        <View style={[styles.groupView, styles.groupLayout]}>
          <View style={[styles.rectangleParent, styles.groupLayout]}>
            <View style={[styles.groupItem, styles.groupLayout]} />
            <View style={[styles.lineGroup, styles.linePosition]}>
              <View style={styles.frameLayout} />
              <View style={[styles.frameInner, styles.frameLayout]} />
            </View>
          </View>
          <View style={styles.alertsWrapper}>
            <Text style={[styles.editProfile, styles.alertsText]}>Privacy</Text>
            <Text style={[styles.bankData, styles.alertsText]}>Safety</Text>
            <Text style={[styles.bankData, styles.alertsText]}>
              Two-factor authentication
            </Text>
          </View>
          <View style={styles.groupWrapper}>
            <Image
              style={styles.frameChildLayout}
              contentFit="cover"
              source={require("../assets/group11.png")}
            />
            <Image
              style={[styles.frameChild1, styles.frameChildLayout]}
              contentFit="cover"
              source={require("../assets/group10.png")}
            />
            <Image
              style={[styles.frameChild1, styles.frameChildLayout]}
              contentFit="cover"
              source={require("../assets/group9.png")}
            />
          </View>
        </View>
        <View style={[styles.groupParent3, styles.rectangleLayout]}>
          <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
            <View style={[styles.rectangleView, styles.rectangleLayout]} />
            <View style={[styles.lineContainer, styles.linePosition]}>
              <View style={styles.frameLayout} />
              <View style={[styles.frameInner, styles.frameLayout]} />
              <View style={[styles.frameInner, styles.frameLayout]} />
              <View style={[styles.frameInner, styles.frameLayout]} />
            </View>
          </View>
          <View style={styles.alertsWrapper}>
            <Text style={[styles.editProfile, styles.alertsText]}>Theme</Text>
            <Text style={[styles.bankData, styles.alertsText]}>
              switch account
            </Text>
            <Text style={[styles.bankData, styles.alertsText]}>
              add new account
            </Text>
            <Text style={[styles.bankData, styles.alertsText]}>Help</Text>
            <Text style={[styles.bankData, styles.alertsText]}>log out</Text>
          </View>
          <View style={styles.groupWrapper}>
            <Image
              style={styles.frameChildLayout}
              contentFit="cover"
              source={require("../assets/group4.png")}
            />
            <Image
              style={[styles.frameChild1, styles.frameChildLayout]}
              contentFit="cover"
              source={require("../assets/group5.png")}
            />
            <Image
              style={[styles.frameChild1, styles.frameChildLayout]}
              contentFit="cover"
              source={require("../assets/group6.png")}
            />
            <Image
              style={[styles.frameChild1, styles.frameChildLayout]}
              contentFit="cover"
              source={require("../assets/group8.png")}
            />
            <Image
              style={[styles.frameChild1, styles.frameChildLayout]}
              contentFit="cover"
              source={require("../assets/group7.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    homeFlexBox: {
      alignItems: "center",
      display: "flex",
      textAlign: "left",
      color: "#f6f6f6",
      height: 36,
      position: "absolute",
    },
    birminghamUkTypo: {
      height: 15,
      fontFamily: "Poppins-Regular",
      fontSize: 12,
      width: 248,
      left: 135,
      alignItems: "center",
      display: "flex",
      textAlign: "left",
      color: "#f6f6f6",
      position: "absolute",
    },
    alertsTypo: {
      fontFamily: "Poppins-SemiBold",
      fontWeight: "600",
    },
    rectanglePosition: {
      left: 0,
      top: 0,
      position: "absolute",
    },
    groupPosition: {
      backgroundColor: "#2f2f2f",
      borderRadius: 5,
      left: 0,
      top: 0,
      position: "absolute",
    },
    alertsText: {
      textTransform: "capitalize",
      height: 15,
      alignItems: "center",
      display: "flex",
      textAlign: "left",
      color: "#f6f6f6",
    },
    groupLayout: {
      height: 105,
      width: 343,
    },
    linePosition: {
      left: 49,
      width: 294,
      position: "absolute",
    },
    frameLayout: {
      height: 1,
      width: 295,
      borderTopWidth: 1,
      borderColor: "#484848",
      borderStyle: "solid",
    },
    frameChildLayout: {
      height: 25,
      width: 25,
    },
    rectangleLayout: {
      height: 175,
      width: 343,
    },
    evaarrowBackOutlineIcon: {
      width: 36,
      height: 36,
      left: 40,
      top: 30,
      position: "absolute",
      overflow: "hidden",
    },
    home: {
      left: 86,
      fontWeight: "500",
      fontFamily: "Poppins-Medium",
      width: 238,
      fontSize: 14,
      top: 30,
      alignItems: "center",
      display: "flex",
      textAlign: "left",
      color: "#f6f6f6",
    },
    louiseJoyKing: {
      top: 145,
      fontSize: 18,
      height: 26,
      width: 248,
      left: 135,
      fontFamily: "Poppins-SemiBold",
      fontWeight: "600",
      alignItems: "center",
      display: "flex",
      textAlign: "left",
      color: "#f6f6f6",
      position: "absolute",
    },
    louisejoykemailcom: {
      top: 176,
    },
    birminghamUk: {
      top: 191,
    },
    darkChild: {
      borderRadius:75,
      top: 136,
      width: 79,
      height: 79,
      left: 40,
      position: "absolute",
      
    },
    settings: {
      top: 70,
      fontSize: 26,
      width: 225,
      alignItems: "center",
      display: "flex",
      textAlign: "left",
      color: "#f6f6f6",
      height: 36,
      position: "absolute",
      left: 40,
    },
    groupChild: {
      height: 35,
      width: 343,
    },
    rectangleWrapper: {
      height: 35,
      width: 343,
    },
    alerts: {
      width: 303,
      fontFamily: "Poppins-SemiBold",
      fontWeight: "600",
      fontSize: 14,
    },
    alertsWrapper: {
      top: 10,
      width: 303,
      left: 40,
      position: "absolute",
    },
    groupWrapper: {
      top: 5,
      left: 6,
      position: "absolute",
    },
    groupLayout1: {
      height: 35,
      width: 343,
    },
    groupItem: {
      backgroundColor: "#2f2f2f",
      borderRadius: 5,
      left: 0,
      top: 0,
      position: "absolute",
    },
    frameInner: {
      marginTop: 36,
    },
    lineParent: {
      top: 35,
      width: 294,
    },
    rectangleParent: {
      left: 0,
      top: 0,
      position: "absolute",
    },
    editProfile: {
      width: 294,
      fontFamily: "Poppins-Regular",
      fontSize: 12,
      textTransform: "capitalize",
    },
    bankData: {
      marginTop: 20,
      width: 294,
      fontFamily: "Poppins-Regular",
      fontSize: 12,
      textTransform: "capitalize",
    },
    frameChild1: {
      marginTop: 10,
    },
    groupView: {
      marginTop: 25,
    },
    lineGroup: {
      top: 37,
      height: 41,
      width: 294,
    },
    rectangleView: {
      backgroundColor: "#2f2f2f",
      borderRadius: 5,
      left: 0,
      top: 0,
      position: "absolute",
    },
    lineContainer: {
      top: 34,
      width: 294,
    },
    rectangleContainer: {
      left: 0,
      top: 0,
      position: "absolute",
    },
    groupParent3: {
      marginTop: 25,
    },
    groupParent: {
      top: 245,
      shadowColor: "rgba(0, 0, 0, 0.25)",
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowRadius: 20,
      elevation: 20,
      shadowOpacity: 1,
      left: 40,
      position: "absolute",
    },
    dark: {
      borderRadius: 1,
      backgroundColor: "#262626",
      flex: 1,
      width: "100%",
      height: 858,
      overflow: "hidden",
    },
  });
  


export default Dark;

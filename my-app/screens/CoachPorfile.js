import * as React from "react";
import { Text,  View, ImageBackground ,StyleSheet} from "react-native";
import { Image } from "expo-image";


const CoachProfile = () => {
  return (
    <View style={styles.coachProfile1}>
      <View style={[styles.tabbar, styles.tabbarPosition]}>
        <View style={styles.options}>
          <Text style={[styles.posts, styles.postsTypo]}>Posts</Text>
          <Text style={[styles.stories, styles.postsTypo]}>Stories</Text>
          <Text style={[styles.stories, styles.postsTypo]}>Liked</Text>
          <Text style={[styles.stories, styles.postsTypo]}>Tagged</Text>
        </View>
        <View style={styles.divider4}>
          <View style={styles.divider5} />
          <View style={styles.selectedTab1} />
        </View>
      </View>
      <View style={[styles.followedBy, styles.tabbarPosition]}>
        <Image
          style={[styles.followedByChild, styles.iconChildLayout]}
          contentFit="cover"
          //source={require("../assets/ellipse1.png")}
        />
        <Image
          style={[styles.followedByItem, styles.iconChildLayout]}
          contentFit="cover"
          //source={require("../assets/ellipse23.png")}
        />
        <Image
          style={[styles.followedByInner, styles.iconChildLayout]}
          contentFit="cover"
          //source={require("../assets/ellipse43.png")}
        />
        <Image
          style={[styles.followedByChild1, styles.iconChildLayout]}
          contentFit="cover"
          //source={require("../assets/ellipse33.png")}
        />
        <Text style={[styles.followedBySofia1, styles.kFollowersLayout]}>
          Followed by Sofia, Jon and 12+ others
        </Text>
      </View>
      <Text style={[styles.katWilliams, styles.coachTypo]}>Kat Williams</Text>
      <Text style={[styles.bostonMa, styles.postsTypo]}>Boston, MA</Text>
      <Text style={[styles.iDesignExperiences1, styles.timeLayout]}>
        I design experiences mostly. I also sometimes travel.
      </Text>
      <ImageBackground
        style={[styles.profileBannerIcon, styles.posts1Layout]}
        resizeMode="cover"
        //source={require("../assets/profilebanner3.png")}
      >
        <View style={[styles.backIcon, styles.border1Border]}>
          <Image
            style={styles.iconArrowLeft1}
            contentFit="cover"
            //source={require("../assets/iconarrowleft3.png")}
          />
        </View>
      </ImageBackground>
      <View style={[styles.story1, styles.story1Position]} />
      <Image
        style={[styles.profilePhotoIcon3, styles.story1Position]}
        contentFit="cover"
        //source={require("../assets/profilephoto3.png")}
      />
      <Image
        style={[styles.messageIcon1, styles.katWilliamsPosition]}
        contentFit="cover"
        //source={require("../assets/message3.png")}
      />
      <View style={styles.barsStatusBarIphoneL}>
        <View style={styles.battery}>
          <View style={[styles.border1, styles.timePosition]} />
          <Image
            style={[styles.capIcon1, styles.iconLayout]}
            contentFit="cover"
            //source={require("../assets/cap3.png")}
          />
          <View style={[styles.capacity1, styles.capacity1Bg]} />
        </View>
        <Image
          style={styles.wifiIcon1}
          contentFit="cover"
          //source={require("../assets/wifi3.png")}
        />
        <Image
          style={styles.cellularConnectionIcon1}
          contentFit="cover"
          //source={require("../assets/cellularconnection3.png")}
        />
        <View style={styles.timeStyle}>
          <Text style={[styles.time, styles.timePosition]}>9:41</Text>
        </View>
      </View>
      <View style={[styles.profileActions, styles.profileFlexBox]}>
        <Text style={[styles.kFollowers, styles.kFollowersLayout]}>
          <Text style={styles.k}>
            <Text style={styles.k1}>6,281k</Text>
          </Text>
          <Text style={styles.followers}>
            <Text style={styles.k}>{` 
`}</Text>
            <Text style={styles.followers1}>Followers</Text>
          </Text>
        </Text>
        <Text style={[styles.kFollowers, styles.kFollowersLayout]}>
          <Text style={styles.k2}>{`10.8k
`}</Text>
          <Text style={styles.following}>Following</Text>
        </Text>
        <View style={[styles.ctaPrimaryDefault, styles.backIconFlexBox]}>
          <Text style={[styles.buttonLabel, styles.buttonLabelLayout]}>
            Follow
          </Text>
        </View>
      </View>
      <View style={[styles.posts1, styles.posts1Layout]}>
        <View style={styles.post1}>
          <View style={styles.content}>
            <View style={[styles.profileInfo, styles.profileFlexBox]}>
              <View style={styles.info}>
                <Image
                  style={[styles.profilePhotoIcon4, styles.iconChildLayout]}
                  contentFit="cover"
                  //source={require("../assets/profilephoto13.png")}
                />
                <View style={styles.katWilliamsParent}>
                  <Text style={styles.katWilliams1}>Kat Williams</Text>
                  <Text style={[styles.hAgo, styles.hAgoTypo]}>1h ago</Text>
                </View>
              </View>
              <Image
                style={styles.iconDotsVertical3}
                contentFit="cover"
                //source={require("../assets/icondotsvertical3.png")}
              />
            </View>
            <View style={styles.carousel}>
              <Image
                style={[styles.carouselChild, styles.carouselChildLayout]}
                contentFit="cover"
                //source={require("../assets/rectangle53.png")}
              />
              <Image
                style={[styles.carouselItem, styles.carouselChildLayout]}
                contentFit="cover"
                //source={require("../assets/rectangle63.png")}
              />
            </View>
            <View style={styles.carouselIndicator}>
              <Image
                style={styles.selectedIcon1Layout}
                contentFit="cover"
                //source={require("../assets/selected3.png")}
              />
              <Image
                style={[
                  styles.carouselIndicatorChild,
                  styles.selectedIcon1Layout,
                ]}
                contentFit="cover"
                //source={require("../assets/ellipse413.png")}
              />
              <Image
                style={[
                  styles.carouselIndicatorChild,
                  styles.selectedIcon1Layout,
                ]}
                contentFit="cover"
                //source={require("../assets/ellipse413.png")}
              />
            </View>
            <View style={[styles.postActions, styles.profileFlexBox]}>
              <View style={styles.info}>
                <View style={styles.info}>
                  <Image
                    style={styles.iconArrowLeft1}
                    contentFit="cover"
                    //source={require("../assets/iconlikes.png")}
                  />
                  <Text style={[styles.text8, styles.hAgoTypo1]}>8,998</Text>
                </View>
                <View style={styles.comment}>
                  <Image
                    style={styles.iconArrowLeft1}
                    contentFit="cover"
                    //source={require("../assets/iconcomment3.png")}
                  />
                  <Text style={[styles.text8, styles.hAgoTypo1]}>145</Text>
                </View>
                <View style={styles.comment}>
                  <Image
                    style={styles.iconArrowLeft1}
                    contentFit="cover"
            //source={require("../assets/iconshare3.png")}
                  />
                  <Text style={[styles.text8, styles.hAgoTypo1]}>12</Text>
                </View>
              </View>
              <Image
                style={styles.iconBookmark3}
                contentFit="cover"
        ////source={require("../assets/iconbookmark3.png")}
              />
            </View>
          </View>
          <View style={styles.dividerBorder} />
        </View>
        <View style={styles.post2}>
          <View style={[styles.content1, styles.contentSpaceBlock]}>
            <View style={[styles.profileInfo, styles.profileFlexBox]}>
              <View style={styles.info}>
                <Image
                  style={[styles.profilePhotoIcon4, styles.iconChildLayout]}
                  contentFit="cover"
                  //source={require("../assets/profilephoto13.png")}
                />
                <View style={styles.katWilliamsParent}>
                  <Text style={styles.katWilliams1}>Kat Williams</Text>
                  <Text style={[styles.hAgo, styles.hAgoTypo]}>1d ago</Text>
                </View>
              </View>
              <Image
                style={styles.iconDotsVertical3}
                contentFit="cover"
                //source={require("../assets/icondotsvertical3.png")}
              />
            </View>
            <Text style={[styles.toAllTheContainer, styles.buttonLabelLayout]}>
              <Text
                style={[styles.toAllThe1, styles.hAgoTypo]}
              >{`To all the young designers out there- learn early to read the signs from organizations only want to instrumentalize you meet their objectives and have zero intentions to attend to your growth and development as a designer. You'll save a lot of... `}</Text>
              <Text style={styles.readMore}>Read More</Text>
            </Text>
            <View style={[styles.postActions, styles.profileFlexBox]}>
              <View style={styles.info}>
                <View style={styles.info}>
                  <Image
                    style={styles.iconArrowLeft1}
                    contentFit="cover"
                    //source={require("../assets/iconlikes.png")}
                  />
                  <Text style={[styles.text8, styles.hAgoTypo1]}>2,245</Text>
                </View>
                <View style={styles.comment}>
                  <Image
                    style={styles.iconArrowLeft1}
                    contentFit="cover"
                    //source={require("../assets/iconcomment3.png")}
                  />
                  <Text style={[styles.text8, styles.hAgoTypo1]}>45</Text>
                </View>
                <View style={styles.comment}>
                  <Image
                    style={styles.iconArrowLeft1}
                    contentFit="cover"
                    //source={require("../assets/iconshare3.png")}
                  />
                  <Text style={[styles.text8, styles.hAgoTypo1]}>124</Text>
                </View>
              </View>
              <Image
                style={styles.iconBookmark3}
                contentFit="cover"
                //source={require("../assets/icon--bookmark.png")}
              />
            </View>
          </View>
          <View style={styles.dividerBorder} />
        </View>
        <View style={styles.post2}>
          <View style={styles.contentSpaceBlock}>
            <View style={[styles.profileInfo, styles.profileFlexBox]}>
              <View style={styles.info}>
                <Image
                  style={[styles.profilePhotoIcon4, styles.iconChildLayout]}
                  contentFit="cover"
                  //source={require("../assets/profilephoto13.png")}
                />
                <View style={styles.katWilliamsParent}>
                  <Text style={styles.katWilliams1}>Kat Williams</Text>
                  <Text style={[styles.hAgo, styles.hAgoTypo]}>1d ago</Text>
                </View>
              </View>
              <Image
                style={styles.iconDotsVertical3}
                contentFit="cover"
                //source={require("../assets/icondotsvertical3.png")}
              />
            </View>
            <Image
              style={[styles.contentChild, styles.carouselChildLayout]}
              contentFit="cover"
              //source={require("../assets/rectangle513.png")}
            />
            <View style={[styles.postActions, styles.profileFlexBox]}>
              <View style={styles.info}>
                <View style={styles.info}>
                  <Image
                    style={styles.iconArrowLeft1}
                    contentFit="cover"
                    //source={require("../assets/iconlike13.png")}
                  />
                  <Text style={[styles.text8, styles.hAgoTypo1]}>10.1k</Text>
                </View>
                <View style={styles.comment}>
                  <Image
                    style={styles.iconArrowLeft1}
                    contentFit="cover"
                    //source={require("../assets/iconlike13.png")}
                  />
                  <Text style={[styles.text8, styles.hAgoTypo1]}>8,983</Text>
                </View>
                <View style={styles.comment}>
                  <Image
                    style={styles.iconArrowLeft1}
                    contentFit="cover"
                    //source={require("../assets/iconlike13.png")}
                  />
                  <Text style={[styles.text8, styles.hAgoTypo1]}>12.2k</Text>
                </View>
              </View>
              <Image
                style={styles.iconBookmark3}
                contentFit="cover"
                //source={require("../assets/iconbookmark13.png")}
              />
            </View>
          </View>
          <View style={[styles.divider8, styles.dividerBorder]} />
        </View>
      </View>
      <View style={[styles.mobilehomeIndicatorLight, styles.posts1Layout]}>
        <View style={[styles.homeIndicator1, styles.capacity1Bg]} />
      </View>
      <View style={[styles.riverifiedBadgeFill1, styles.coachPosition]} />
      <Image
        style={[styles.vectorIcon1, styles.iconLayout]}
        contentFit="cover"
        //source={require("../assets/vector3.png")}
      />
      <Text style={[styles.coach, styles.coachPosition]}>coach</Text>
      
    </View>
  );
};
const styles = StyleSheet.create({
    tabbarPosition: {
      left: 24,
      position: "absolute",
    },
    postsTypo: {
      textAlign: "center",
      fontFamily: "HK Grotesk",
    },
    iconChildLayout: {
      width: 32,
      height: 32,
    },
    kFollowersLayout: {
      lineHeight: 18,
      textAlign: "left",
    },
    coachTypo: {
      lineHeight: 32,
      fontSize: 18,
      textAlign: "center",
      color: "#fff",
    },
    timeLayout: {
      lineHeight: 20,
      textAlign: "center",
    },
    posts1Layout: {
      width: 375,
      position: "absolute",
    },
    border1Border: {
      borderWidth: 1,
      borderStyle: "solid",
    },
    story1Position: {
      left: 9,
      borderRadius: 100,
      position: "absolute",
      overflow: "hidden",
    },
    katWilliamsPosition: {
      top: 177,
      position: "absolute",
    },
    timePosition: {
      left: "0%",
      position: "absolute",
    },
    iconLayout: {
      maxHeight: "100%",
      maxWidth: "100%",
      position: "absolute",
      overflow: "hidden",
    },
    capacity1Bg: {
      backgroundColor: "#fff",
      position: "absolute",
    },
    profileFlexBox: {
      justifyContent: "space-between",
      alignItems: "center",
      flexDirection: "row",
    },
    backIconFlexBox: {
      borderRadius: 30,
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "center",
    },
    buttonLabelLayout: {
      lineHeight: 24,
      fontSize: 16,
    },
    hAgoTypo: {
      fontWeight: "500",
      fontFamily: "HK Grotesk",
    },
    carouselChildLayout: {
      height: 180,
      borderRadius: 16,
    },
    selectedIcon1Layout: {
      height: 6,
      width: 6,
    },
    hAgoTypo1: {
      fontSize: 12,
      textAlign: "left",
      lineHeight: 16,
    },
    contentSpaceBlock: {
      paddingVertical: 0,
      paddingHorizontal: 24,
      justifyContent: "center",
    },
    dividerBorder: {
      height: 2,
      borderTopWidth: 2,
      marginTop: 16,
      alignSelf: "stretch",
      borderColor: "#323436",
      borderStyle: "solid",
    },
    coachPosition: {
      top: 206,
      position: "absolute",
    },
    posts: {
      color: "#fff",
      fontWeight: "700",
      lineHeight: 16,
      fontSize: 13,
    },
    stories: {
      marginLeft: 60,
      color: "#fff",
      lineHeight: 16,
      fontSize: 13,
    },
    options: {
      flexDirection: "row",
    },
    divider5: {
      borderTopWidth: 1,
      width: 328,
      height: 1,
      borderColor: "#323436",
      borderStyle: "solid",
    },
    selectedTab1: {
      borderColor: "#2e8af6",
      borderTopWidth: 4,
      width: 43,
      height: 4,
      borderStyle: "solid",
    },
    divider4: {
      marginTop: 12,
    },
    tabbar: {
      top: 477,
      justifyContent: "center",
    },
    followedByChild: {
      left: 0,
      top: 0,
      position: "absolute",
    },
    followedByItem: {
      left: 14,
      top: 0,
      position: "absolute",
    },
    followedByInner: {
      left: 28,
      top: 0,
      position: "absolute",
    },
    followedByChild1: {
      left: 43,
      top: 0,
      position: "absolute",
    },
    followedBySofia1: {
      top: 7,
      left: 82,
      opacity: 0.6,
      textAlign: "left",
      color: "#fff",
      fontFamily: "HK Grotesk",
      fontSize: 13,
      position: "absolute",
    },
    followedBy: {
      top: 421,
      width: 303,
      height: 32,
    },
    katWilliams: {
      left: 163,
      top: 177,
      position: "absolute",
      fontFamily: "HK Grotesk",
      fontWeight: "700",
    },
    bostonMa: {
      top: 240,
      left: 164,
      color: "#727477",
      fontWeight: "600",
      lineHeight: 16,
      fontSize: 13,
      position: "absolute",
    },
    iDesignExperiences1: {
      top: 325,
      left: 22,
      width: 327,
      color: "#ecebed",
      fontSize: 14,
      fontFamily: "HK Grotesk",
      position: "absolute",
    },
    iconArrowLeft1: {
      width: 16,
      height: 16,
      overflow: "hidden",
    },
    backIcon: {
      top: 60,
      backgroundColor: "#000",
      padding: 8,
      alignItems: "center",
      borderRadius: 30,
      flexDirection: "row",
      justifyContent: "center",
      borderColor: "#323436",
      left: 24,
      position: "absolute",
    },
    profileBannerIcon: {
      height: 160,
      left: 0,
      top: 0,
      overflow: "hidden",
    },
    story1: {
      top: 165,
      width: 150,
      height: 150,
      borderRadius: 100,
      backgroundColor: "#181a1c",
    },
    profilePhotoIcon3: {
      top: 175,
      width: 140,
      height: 140,
      borderRadius: 100,
    },
    messageIcon1: {
      left: 328,
      borderRadius: 32,
      width: 32,
      height: 32,
    },
    border1: {
      height: "100%",
      width: "90.43%",
      top: "0%",
      right: "9.57%",
      bottom: "0%",
      borderRadius: 3,
      borderColor: "#fff",
      opacity: 0.35,
      borderWidth: 1,
      borderStyle: "solid",
    },
    capIcon1: {
      height: "35.29%",
      width: "5.46%",
      top: "32.35%",
      right: "0%",
      bottom: "32.35%",
      left: "94.54%",
      opacity: 0.4,
    },
    capacity1: {
      height: "64.71%",
      width: "73.99%",
      top: "17.65%",
      right: "17.79%",
      bottom: "17.65%",
      left: "8.22%",
      borderRadius: 1,
    },
    battery: {
      height: "25.76%",
      width: "6.49%",
      top: "39.39%",
      right: "3.82%",
      bottom: "34.85%",
      left: "89.69%",
      position: "absolute",
    },
    wifiIcon1: {
      width: 15,
      height: 11,
    },
    cellularConnectionIcon1: {
      width: 17,
      height: 11,
    },
    time: {
      marginTop: -4.5,
      top: "50%",
      fontSize: 15,
      letterSpacing: 0,
      fontFamily: "SF Pro Text",
      lineHeight: 20,
      textAlign: "center",
      fontWeight: "600",
      color: "#fff",
      width: "100%",
    },
    timeStyle: {
      height: "47.73%",
      width: "14.4%",
      top: "15.91%",
      right: "80%",
      bottom: "36.36%",
      left: "5.6%",
      position: "absolute",
    },
    barsStatusBarIphoneL: {
      right: 0,
      height: 44,
      left: 0,
      top: 0,
      position: "absolute",
    },
    k1: {
      fontFamily: "HK Grotesk",
      fontWeight: "700",
    },
    k: {
      color: "#fff",
    },
    followers1: {
      color: "#727477",
    },
    followers: {
      fontWeight: "600",
      fontFamily: "HK Grotesk",
    },
    kFollowers: {
      fontSize: 14,
      textAlign: "left",
    },
    k2: {
      color: "#fff",
      fontFamily: "HK Grotesk",
      fontWeight: "700",
    },
    following: {
      color: "#727477",
      fontWeight: "600",
      fontFamily: "HK Grotesk",
    },
    buttonLabel: {
      textAlign: "center",
      fontFamily: "HK Grotesk",
      color: "#fff",
      fontWeight: "700",
    },
    ctaPrimaryDefault: {
      backgroundColor: "#f62e8e",
      paddingHorizontal: 32,
      paddingVertical: 6,
      alignItems: "center",
    },
    profileActions: {
      top: 369,
      width: 327,
      left: 24,
      position: "absolute",
    },
    profilePhotoIcon4: {
      borderRadius: 100,
      overflow: "hidden",
    },
    katWilliams1: {
      color: "#ecebed",
      fontSize: 14,
      textAlign: "left",
      fontFamily: "HK Grotesk",
      fontWeight: "700",
      lineHeight: 16,
    },
    hAgo: {
      marginTop: 2,
      fontSize: 12,
      textAlign: "left",
      lineHeight: 16,
      color: "#727477",
    },
    katWilliamsParent: {
      marginLeft: 8,
    },
    info: {
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "center",
    },
    iconDotsVertical3: {
      width: 24,
      height: 24,
      overflow: "hidden",
    },
    profileInfo: {
      alignSelf: "stretch",
    },
    carouselChild: {
      width: 118,
    },
    carouselItem: {
      width: 115,
      marginLeft: 12,
    },
    carousel: {
      width: 228,
      paddingRight: 149,
      marginTop: 16,
      alignItems: "center",
      flexDirection: "row",
    },
    carouselIndicatorChild: {
      marginLeft: 10,
    },
    carouselIndicator: {
      marginTop: 16,
      alignSelf: "stretch",
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "center",
    },
    text8: {
      marginLeft: 8,
      fontWeight: "600",
      color: "#fff",
      fontFamily: "HK Grotesk",
    },
    comment: {
      marginLeft: 20,
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "center",
    },
    iconBookmark3: {
      width: 20,
      height: 20,
      overflow: "hidden",
    },
    postActions: {
      marginTop: 16,
      width: 327,
    },
    content: {
      width: 327,
      justifyContent: "center",
    },
    post1: {
      alignSelf: "stretch",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
    },
    toAllThe1: {
      color: "#ecebed",
    },
    readMore: {
      textDecoration: "underline",
      color: "#f62e8e",
      fontFamily: "HK Grotesk",
      fontWeight: "700",
    },
    toAllTheContainer: {
      marginTop: 16,
      alignSelf: "stretch",
      textAlign: "left",
    },
    content1: {
      alignSelf: "stretch",
    },
    post2: {
      marginTop: 24,
      alignSelf: "stretch",
      alignItems: "center",
      justifyContent: "center",
    },
    contentChild: {
      marginTop: 16,
      width: 327,
    },
    divider8: {
      display: "none",
    },
    posts1: {
      top: 499,
      left: -6,
      alignItems: "center",
      justifyContent: "center",
    },
    homeIndicator1: {
      marginLeft: -66.5,
      bottom: 8,
      left: "50%",
      width: 134,
      height: 5,
      borderRadius: 100,
    },
    mobilehomeIndicatorLight: {
      bottom: 0,
      height: 24,
      left: 0,
    },
    riverifiedBadgeFill1: {
      left: 159,
      width: 30,
      height: 32,
      overflow: "hidden",
    },
    vectorIcon1: {
      height: "1.71%",
      width: "4.9%",
      top: "18.07%",
      right: "51.6%",
      bottom: "80.21%",
      left: "43.5%",
    },
    coach: {
      left: 180,
      fontFamily: "Inter-Regular",
      width: 72,
      height: 19,
      lineHeight: 32,
      fontSize: 18,
      textAlign: "center",
      color: "#fff",
    },
    coachProfile1: {
      flex: 1,
      height: 1173,
      overflow: "hidden",
      width: "100%",
      backgroundColor: "#181a1c",
    },
  });
  
  
  
export default CoachProfile;




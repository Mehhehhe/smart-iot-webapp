import 'package:flutter/material.dart';
import 'dart:math' as math;

class HomepageWidget extends StatefulWidget {
  const HomepageWidget({super.key});

  @override
  _HomepageWidgetState createState() => _HomepageWidgetState();
}

class _HomepageWidgetState extends State<HomepageWidget> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: LayoutBuilder(
        builder: (context, constraints){
          if (constraints.maxWidth < 600) {
            return HomePageSmall();
          } else {
            return HomePageLarge();
          }
        },
      ),
    );
  }
}

class HomePageSmall extends StatefulWidget {
  @override
  _HomePageSmallState createState() => _HomePageSmallState();
}

class _HomePageSmallState extends State<HomePageSmall>{
  @override
  Widget build(BuildContext context) {
    throw UnimplementedError();
  }

}

class HomePageLarge extends StatefulWidget {
  @override
  _HomePageLargeState createState() => _HomePageLargeState();
}

class _HomePageLargeState extends State<HomePageLarge>{
  @override
  Widget build(BuildContext context) {
    return Container(
      child: Stack(
        children: <Widget>[
          previewScreen(),
        ],
      ),
    );
  }

  Widget previewScreen() {
    return Container();
  }

  Widget loginSection() {
    print("Loaded");
    return Container(
      height: 1024,
      width: 200,
      child: Positioned(
        left: 0,
        top: 50,
        child: Column(
         children: [
           Text(
               "Login Section",
             style: TextStyle(
               color: Colors.black,
               fontFamily: "assets/fonts/Roboto-Regular.ttf",
               fontSize: 20,
             ),
           ),
         ],
        ),
      ),
    );
  }
}
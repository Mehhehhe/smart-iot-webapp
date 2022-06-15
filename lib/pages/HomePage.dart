import 'package:flutter/material.dart';
import 'dart:math' as math;

class HomepageWidget extends StatefulWidget {
  @override
  _HomepageWidgetState createState() => _HomepageWidgetState();
}

class _HomepageWidgetState extends State<HomepageWidget> {
  @override
  Widget build(BuildContext context) {
    // Figma Flutter Generator HomepageWidget - FRAME

    return Container(
        width: 1000,
        height: 1024,
        decoration: BoxDecoration(
          color : Color.fromRGBO(100, 100, 100, 1),
        ),
        child: Stack(
            children: <Widget>[
              Positioned(
                  top: 0,
                  left: 0,
                  child: Container(
                      width: 413,
                      height: 1024,
                      decoration: BoxDecoration(
                        color : Color.fromRGBO(255, 239, 157, 1),
                      )
                  )
              ),Positioned(
                  top: 468,
                  left: 740,
                  child: Text('Preview Section', textAlign: TextAlign.left, style: TextStyle(
                      color: Color.fromRGBO(0, 0, 0, 1),
                      fontFamily: 'Inter',
                      fontSize: 36,
                      letterSpacing: 0 /*percentages not used in flutter. defaulting to zero*/,
                      fontWeight: FontWeight.normal,
                      height: 1
                  ),)
              ),Positioned(
                  top: 25,
                  left: 23,
                  child: Container(
                      width: 255,
                      height: 148,
                      decoration: BoxDecoration(
                        color : Color.fromRGBO(83, 83, 83, 1),
                      )
                  )
              ),Positioned(
                  top: 390,
                  left: 32,
                  child: Container(
                      width: 381,
                      height: 60,

                      child: Stack(
                          children: <Widget>[
                            Positioned(
                                top: 0,
                                left: 0,
                                child: Container(
                                    width: 337,
                                    height: 60,
                                    decoration: BoxDecoration(
                                      borderRadius : BorderRadius.only(
                                        topLeft: Radius.circular(25),
                                        topRight: Radius.circular(25),
                                        bottomLeft: Radius.circular(25),
                                        bottomRight: Radius.circular(25),
                                      ),
                                      boxShadow : [BoxShadow(
                                          color: Color.fromRGBO(0, 0, 0, 0.25),
                                          offset: Offset(0,4),
                                          blurRadius: 4
                                      )],
                                      color : Color.fromRGBO(0, 56, 255, 0.6700000166893005),
                                    )
                                )
                            ),Positioned(
                                top: 16,
                                left: 0,
                                child: Text('Sign up with Facebook', textAlign: TextAlign.center, style: TextStyle(
                                    color: Color.fromRGBO(255, 255, 255, 1),
                                    fontFamily: 'Roboto',
                                    fontSize: 24,
                                    letterSpacing: 0 /*percentages not used in flutter. defaulting to zero*/,
                                    fontWeight: FontWeight.normal,
                                    height: 1
                                ),)
                            ),Positioned(
                                top: 12,
                                left: 25,
                                child: Container(
                                    width: 36,
                                    height: 36,
                                    decoration: BoxDecoration(
                                      image : DecorationImage(
                                          image: AssetImage('assets/images/Image2.png'),
                                          fit: BoxFit.fitWidth
                                      ),
                                    )
                                )
                            ),
                          ]
                      )
                  )
              ),Positioned(
                  top: 312,
                  left: 32,
                  child: Container(
                      width: 381,
                      height: 60,

                      child: Stack(
                          children: <Widget>[
                            Positioned(
                                top: 0,
                                left: 0,
                                child: Container(
                                    width: 337,
                                    height: 60,
                                    decoration: BoxDecoration(
                                      borderRadius : BorderRadius.only(
                                        topLeft: Radius.circular(25),
                                        topRight: Radius.circular(25),
                                        bottomLeft: Radius.circular(25),
                                        bottomRight: Radius.circular(25),
                                      ),
                                      boxShadow : [BoxShadow(
                                          color: Color.fromRGBO(0, 0, 0, 0.25),
                                          offset: Offset(0,4),
                                          blurRadius: 4
                                      )],
                                      color : Color.fromRGBO(255, 255, 255, 0.6700000166893005),
                                    )
                                )
                            ),Positioned(
                                top: 16,
                                left: 0,
                                child: Text('Sign up with Google', textAlign: TextAlign.center, style: TextStyle(
                                    color: Color.fromRGBO(146, 146, 146, 1),
                                    fontFamily: 'Roboto',
                                    fontSize: 24,
                                    letterSpacing: 0 /*percentages not used in flutter. defaulting to zero*/,
                                    fontWeight: FontWeight.normal,
                                    height: 1
                                ),)
                            ),Positioned(
                                top: 9,
                                left: 36,
                                child: Container(
                                    width: 42,
                                    height: 42,
                                    decoration: BoxDecoration(
                                      image : DecorationImage(
                                          image: AssetImage('assets/images/Image1.png'),
                                          fit: BoxFit.fitWidth
                                      ),
                                    )
                                )
                            ),
                          ]
                      )
                  )
              ),Positioned(
                  top: 235,
                  left: 10,
                  child: Container(
                      width: 381,
                      height: 60,

                      child: Stack(
                          children: <Widget>[
                            Positioned(
                                top: 0,
                                left: 22,
                                child: Container(
                                    width: 337,
                                    height: 60,
                                    decoration: BoxDecoration(
                                      borderRadius : BorderRadius.only(
                                        topLeft: Radius.circular(25),
                                        topRight: Radius.circular(25),
                                        bottomLeft: Radius.circular(25),
                                        bottomRight: Radius.circular(25),
                                      ),
                                      boxShadow : [BoxShadow(
                                          color: Color.fromRGBO(0, 0, 0, 0.25),
                                          offset: Offset(0,4),
                                          blurRadius: 4
                                      )],
                                      color : Color.fromRGBO(255, 137, 0, 0.6700000166893005),
                                    )
                                )
                            ),Positioned(
                                top: 16,
                                left: 0,
                                child: Text('Sign up with email address', textAlign: TextAlign.center, style: TextStyle(
                                    color: Color.fromRGBO(255, 255, 255, 1),
                                    fontFamily: 'Roboto',
                                    fontSize: 24,
                                    letterSpacing: 0 /*percentages not used in flutter. defaulting to zero*/,
                                    fontWeight: FontWeight.normal,
                                    height: 1
                                ),)
                            ),
                          ]
                      )
                  )
              ),Positioned(
                  top: 490,
                  left: 59,
                  child: Transform.rotate(
                    angle: -0.000005008956130975318 * (math.pi / 180),
                    child: Divider(
                        color: Color.fromRGBO(0, 0, 0, 1),
                        thickness: 2
                    )
                    ,
                  )
              ),Positioned(
                  top: 508,
                  left: 87,
                  child: Text('Already have an account?', textAlign: TextAlign.center, style: TextStyle(
                      color: Color.fromRGBO(0, 0, 0, 1),
                      fontFamily: 'Roboto',
                      fontSize: 20,
                      letterSpacing: 0 /*percentages not used in flutter. defaulting to zero*/,
                      fontWeight: FontWeight.normal,
                      height: 1
                  ),)
              ),Positioned(
                  top: 548,
                  left: 66,
                  child: Container(
                      width: 268,
                      height: 62,
                      decoration: BoxDecoration(
                        borderRadius : BorderRadius.only(
                          topLeft: Radius.circular(25),
                          topRight: Radius.circular(25),
                          bottomLeft: Radius.circular(25),
                          bottomRight: Radius.circular(25),
                        ),
                        boxShadow : [BoxShadow(
                            color: Color.fromRGBO(0, 0, 0, 0.25),
                            offset: Offset(0,4),
                            blurRadius: 4
                        )],
                        color : Color.fromRGBO(223, 147, 0, 1),
                      )
                  )
              ),Positioned(
                  top: 565,
                  left: 163,
                  child: Text('Sign In', textAlign: TextAlign.center, style: TextStyle(
                      color: Color.fromRGBO(255, 255, 255, 1),
                      fontFamily: 'Roboto',
                      fontSize: 24,
                      letterSpacing: 0 /*percentages not used in flutter. defaulting to zero*/,
                      fontWeight: FontWeight.normal,
                      height: 1
                  ),)
              ),Positioned(
                  top: 531,
                  left: 775,
                  child: Text('ใส่คลิปพรีวิวการใช้งานเว็ป', textAlign: TextAlign.center, style: TextStyle(
                      color: Color.fromRGBO(0, 0, 0, 1),
                      fontFamily: 'Roboto',
                      fontSize: 20,
                      letterSpacing: 0 /*percentages not used in flutter. defaulting to zero*/,
                      fontWeight: FontWeight.normal,
                      height: 1
                  ),)
              ),
            ]
        )
    );
  }
}
        
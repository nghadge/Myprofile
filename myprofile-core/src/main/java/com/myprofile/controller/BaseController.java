package com.myprofile.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * Created by nikhilghadge on 7/8/15.
 */

@Controller
public class BaseController {

    private final static Logger LOG = LoggerFactory.getLogger(BaseController.class);

    @RequestMapping(value = URIPaths.HOME, method = RequestMethod.GET)
    public String welcome(ModelMap modelMap) {
        LOG.info("Welcome to page");
        return URIPaths.HOME;
    }
}

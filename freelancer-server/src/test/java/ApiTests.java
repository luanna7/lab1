package com.freelancer.spring.flbackend;

import com.freelancer.spring.flbackend.dao.BidDao;
import com.freelancer.spring.flbackend.dao.ProjectDao;
import com.freelancer.spring.flbackend.dao.UserDao;
import com.freelancer.spring.flbackend.dto.ProjectDto;
import com.freelancer.spring.flbackend.dto.UserDto;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = FlBackendApplication.class, webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class ApiTests {
    @Autowired
    private TestRestTemplate restTemplate;

    @Autowired
    private UserDao userDao;

    @Autowired
    private ProjectDao projectDao;

    @Autowired
    private BidDao bidDao;

    @Test
    public void shouldNotFoundUsers() throws Exception {
        ResponseEntity response =
                restTemplate.getForEntity("/users/111", UserDto.class);
        Assert.assertEquals(response.getStatusCode(), HttpStatus.NOT_FOUND);

    }

    @Test
    public void shouldNotFoundProject() throws  Exception {

        ResponseEntity response =
                restTemplate.getForEntity("/projects/111", ProjectDto.class);
        Assert.assertEquals(response.getStatusCode(), HttpStatus.NOT_FOUND);
    }

    @Test
    public void shouldNotFoundUserProfile() throws  Exception {

        ResponseEntity response =
                restTemplate.getForEntity("/users/111/profile", UserDto.class);
        Assert.assertEquals(response.getStatusCode(), HttpStatus.NOT_FOUND);
    }

    @Test
    public void shouldNotFoundProjectsWithInvalidStatus() throws  Exception {

        ResponseEntity response =
                restTemplate.getForEntity("/projects/status/invalidxxx", List.class);
        Assert.assertEquals(response.getStatusCode(), HttpStatus.OK);
        Assert.assertEquals(response.getBody().toString(), "[]");
    }

    @Test
    public void shouldNotFoundProjectsPublishedByInvalidUser() throws  Exception {

        ResponseEntity response =
                restTemplate.getForEntity("/projects/publisher/111", List.class);
        Assert.assertEquals(response.getStatusCode(), HttpStatus.OK);
        Assert.assertEquals(response.getBody().toString(), "[]");
    }

}

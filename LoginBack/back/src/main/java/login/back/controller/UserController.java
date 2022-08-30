package login.back.controller;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import login.back.model.FrontUser;
import login.back.model.Users;
import login.back.services.UserServices;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins="http//localhost:4200")
public class UserController {
	
	@Autowired
	private UserServices userService;
	
	@PostMapping("/login")
	public ResponseEntity<?> loginUser(@RequestBody Users userData){
		
		FrontUser frontUser = userService.login(userData);
		if (frontUser!=null)
		return ResponseEntity.ok().body(frontUser);
		else return (ResponseEntity<?>) ResponseEntity.internalServerError();
		}
	
	@PostMapping("/register")
	public ResponseEntity<Users> registerUser(@RequestBody Users userData) {
		
		Users user = userService.register(userData);
		
		return ResponseEntity.ok(user);
		
	}
	
	@PutMapping("/update")
	public ResponseEntity<Users> updateUser(@RequestBody Users userData) {
		
		Users user = userService.update(userData);
		return ResponseEntity.ok().body(user);
		
	}
	
	@GetMapping("/{username}")
	public ResponseEntity<Users> getUser(@PathVariable String username) {
		Users user = userService.findByUserName(username);
		return ResponseEntity.ok(user);
	}

}

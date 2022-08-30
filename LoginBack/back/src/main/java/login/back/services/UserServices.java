package login.back.services;

import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;
import login.back.model.FrontUser;
import login.back.model.Users;
import login.back.repository.UsersRepository;

@Service
public class UserServices {
	
	@Autowired
	private UsersRepository userRepository;
	
	public FrontUser login( Users userData){
		Users user = userRepository.findByUsername(userData.getUsername());
		if(user.getPassword().equals(userData.getPassword())) 
		{	
			FrontUser frontuser = new FrontUser();
			frontuser.setEmail( user.getEmail());
			frontuser.setId(user.getId());
			frontuser.setUsername(user.getUsername());
			return (frontuser);
		}
		return null;
		
	}
	
	public Users register( Users userData) {
		Random rand = new Random();
		Users user = new Users();
		user.setUsername(userData.getUsername());
		user.setEmail(userData.getEmail());
		user.setFirstacess(true);
		user.setId(rand.nextInt());
		user.setPassword(userData.getPassword());
		return userRepository.save(user);
		
	}
	
	public Users update(Users userData) {
		
		Users user = userRepository.findByUsername(userData.getUsername()); 		
		user.setFirstacess(false);
		return userRepository.save(user);
		
	}

	public Users findByUserName(String username) {
		Users user = userRepository.findByUsername(username);
		return user;
	}

}

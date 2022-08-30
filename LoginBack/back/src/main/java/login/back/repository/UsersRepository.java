package login.back.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import login.back.model.Users;

@Repository
public interface UsersRepository extends JpaRepository<Users, Number> {

	Users findByEmail(String email);

	Users findByUsername(String username);

}
